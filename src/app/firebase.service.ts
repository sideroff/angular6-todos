import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  hasLoaded: boolean = false
  db: AngularFirestore
  auth: AngularFireAuth
  activeTodos: any
  doneTodos: any
  user: any

  constructor(db: AngularFirestore, auth: AngularFireAuth) {
    this.db = db
    this.auth = auth
    this.user = null

    this.auth.authState.subscribe(user => {
      this.user = user

      this.activeTodos = this.user ? this.db.collection(`todos/${this.user.uid}/active`) : null
      this.doneTodos = this.user ? this.db.collection(`todos/${this.user.uid}/done`) : null

      this.hasLoaded = true
    })
  }

  isLoggedIn(): Observable<boolean> {
    // f me
    return this.auth.authState.pipe(map(u => !!u))
  }

  getActiveTodos() {
    return this.activeTodos ? this.activeTodos.valueChanges() : null
  }

  getDoneTodos() {
    return this.doneTodos ? this.doneTodos.valueChanges() : null
  }

  addTodo(todo) {
    return this.activeTodos.add(todo)
  }

  markTodoAsDone(todoId) {
  }
}
