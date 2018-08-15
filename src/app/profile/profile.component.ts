import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { VexService } from '../vex.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private vex: VexService, private firebase: FirebaseService) { }

  ngOnInit() {
  }

  logout() {
    this.firebase.auth.auth.signOut().then(() => {
      this.vex.instance.dialog.alert('You have signed out successfully')
    }).catch(error => {
      this.vex.instance.dialog.alert(error.message || 'There was a problem while logging you out.')
    })
  }
}
