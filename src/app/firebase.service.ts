import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  hasLoaded: boolean = false
  db: AngularFireDatabase
  auth: AngularFireAuth
  activeTodos: any
  doneTodos: any
  user: any

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db = db
    this.auth = auth
    this.user = null

    this.auth.authState.subscribe(user => {
      this.user = user

      this.activeTodos = this.user ? this.db.list(`todos/${this.user.uid}/active`).valueChanges() : null
      this.doneTodos = this.user ? this.db.list(`todos/${this.user.uid}/done`).valueChanges() : null

      this.hasLoaded = true
    })
  }

  getActiveTodos() {
    if (!this.user) return;

    return this.activeTodos
  }

  isLoggedIn(): Observable<boolean> {
    // f me
    return this.auth.authState.pipe(map(u => !!u))
  }


  getDoneTodos() {
    if (!this.user) return;

    return this.doneTodos
  }

  addTodo(todo) {
    return this.activeTodos.push(todo)
  }

  markTodoAsDone(todoId) {
  }
}
