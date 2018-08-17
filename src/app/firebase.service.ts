import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  hasLoaded: boolean = false
  db: AngularFirestore
  auth: AngularFireAuth
  activeTodos: AngularFirestoreCollection
  doneTodos: AngularFirestoreCollection
  user: any
  todosCollectionPath: string

  constructor(db: AngularFirestore, auth: AngularFireAuth) {
    this.db = db
    this.auth = auth
    this.user = null
    this.todosCollectionPath = ''

    this.auth.authState.subscribe(user => {
      this.user = user
      this.todosCollectionPath = this.user ? `todos/${this.user.uid}` : ''
      this.activeTodos = this.user ? this.db.collection(this.todosCollectionPath + '/active') : null
      this.doneTodos = this.user ? this.db.collection(this.todosCollectionPath + '/done') : null

      this.hasLoaded = true
    })
  }

  isLoggedIn(): Observable<boolean> {
    // f me
    return this.auth.authState.pipe(map(u => !!u))
  }

  getActiveTodos() {
    return this.activeTodos
      ? this.activeTodos
        .snapshotChanges().pipe(
          map((activeTodos: any) => activeTodos.map(at => ({ id: at.payload.doc.id, ...at.payload.doc.data() })))
        )
      : null
  }

  getDoneTodos() {
    return this.doneTodos ? this.doneTodos.snapshotChanges().pipe(
      map((doneTodos: any) => doneTodos.map(dt => ({ id: dt.payload.doc.id, ...dt.payload.doc.data() })))
    ) : null
  }

  addTodo(todo) {
    return this.activeTodos.add(todo)
  }

  markTodoAsDone(todo): Promise<any> {
    return Promise.all([
      this.db.doc(this.todosCollectionPath + `/active/${todo.id}`).delete(),
      this.db.collection(this.todosCollectionPath + '/done').add(todo)
    ])
  }
}
