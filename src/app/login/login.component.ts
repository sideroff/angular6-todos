import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault()
    console.log(this.loginForm)
  }

}
