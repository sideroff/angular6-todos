import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { VexService } from '../vex.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: '';
  password: '';
  isLoggingIn = false

  constructor(private router: Router, private route: ActivatedRoute, private firebase: FirebaseService, private vex: VexService) { }

  login(loginForm) {
    let formValues = loginForm.value
    this.isLoggingIn = true

    this.firebase.auth.auth.signInWithEmailAndPassword(formValues.email, formValues.password).then(response => {
      this.isLoggingIn = false

      let url = this.route.snapshot.queryParams.returnUrl || ''

      this.router.navigateByUrl(url)
    }).catch(error => {
      this.vex.instance.alert(error.message)
      this.isLoggingIn = false
    })
  }
}
