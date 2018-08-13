import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  logout() {
    this.firebase.instance.auth().signOut().then(response => {
      console.log('successfully logged out')
    }).catch(error => {
      console.log('could not log out')
    })
  }
}
