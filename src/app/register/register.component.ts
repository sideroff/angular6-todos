import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FirebaseService } from '../firebase.service';
import { VexService } from '../vex.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = ''
  password: string = ''
  confirmPassword: string = ''
  isRegistering: boolean = false

  constructor(private router: Router, private firebase: FirebaseService, private vex: VexService) { }

  register(registerForm) {
    let formValues = registerForm.value

    this.isRegistering = true
    this.firebase.auth.auth.createUserWithEmailAndPassword(formValues.email, formValues.password).then(response => {
      this.vex.instance.dialog.alert('You have registered successfully!')
      this.router.navigateByUrl('')
      this.isRegistering = false
    }).catch(error => {
      this.vex.instance.dialog.alert(error.message || 'There was a problem while registering you.')
      this.isRegistering = false
    })
  }

}
