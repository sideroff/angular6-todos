import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private config = {
    apiKey: "AIzaSyBswAR__qM7llMFrLrIrw9J9PXMNdAUiDk",
    authDomain: "angular6-todos.firebaseapp.com",
    databaseURL: "https://angular6-todos.firebaseio.com",
    projectId: "angular6-todos",
    storageBucket: "angular6-todos.appspot.com",
    messagingSenderId: "906436407919"
  };

  constructor() {
    console.log('constructor firebase')
    //init only if we haven't already
    if (!firebase.apps.length) {
      console.log('initializing firebase')
      firebase.initializeApp(this.config)
    }
  }

  instance = firebase
}
