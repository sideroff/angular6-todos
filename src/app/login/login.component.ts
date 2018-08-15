import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';


  isLoggingIn = false

  constructor(private router: Router, private route: ActivatedRoute, private firebase: FirebaseService) { }

  ngOnInit() { }

  login(loginForm) {
    console.log(loginForm.value)

    this.isLoggingIn = true
    // this.firebase.auth.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(response => {
    //   // this.popupService.addMessage('success', 'You have successfully logged in!')
    //   console.log('logged in', response)

    //   this.isLoggingIn = false

    //   let url = this.route.snapshot.queryParams.returnUrl || ''

    //   this.router.navigateByUrl(url)
    // }).catch(error => {
    //   // this.popupService.addMessage('error', error.message)
    //   console.log('error logging in', error)

    //   this.isLoggingIn = false
    // })
  }
}
