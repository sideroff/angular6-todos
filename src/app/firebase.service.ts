import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: AngularFireDatabase
  auth: AngularFireAuth
  activeTodos: any
  doneTodos: any
  user: any

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db = db
    this.auth = auth
    this.user = null

    // on state change if rediect url > go to url
    this.auth.authState.subscribe(user => {
      console.log(user);
      this.user = user;
      this.activeTodos = this.db.list(`todos/${this.user.uid}/active`).valueChanges();
      this.doneTodos = this.db.list(`todos/${this.user.uid}/done`).valueChanges();
    })

  }

  getActiveTodos() {
    if (!this.user) return;

    return this.activeTodos
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
