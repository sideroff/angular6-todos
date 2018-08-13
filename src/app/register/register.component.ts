import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  isRegistering = false


  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault()

    this.isRegistering = true
    this.firebase.instance.auth().createUserWithEmailAndPassword(this.registerForm.email, this.registerForm.password).then(response => {
      console.log('registration successful', response)
      this.router.navigateByUrl('')
      this.isRegistering = false
    }).catch(error => {
      console.log('could not register', error)

      this.isRegistering = false
    })
  }

}
