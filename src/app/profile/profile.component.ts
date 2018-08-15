import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log('logging out')
    // this.firebase.instance.auth().signOut().then(response => {
    //   console.log('successfully logged out')
    // }).catch(error => {
    //   console.log('could not log out')
    // })
  }
}
