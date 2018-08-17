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
  userEmail: string

  constructor(private router: Router, private vex: VexService, private firebase: FirebaseService) {
    this.userEmail = firebase.user.email
  }

  ngOnInit() {
  }

  logout() {
    this.firebase.auth.auth.signOut().then(() => {
      this.vex.instance.dialog.alert('You have signed out successfully')
      this.router.navigateByUrl('')
    }).catch(error => {
      this.vex.instance.dialog.alert(error.message || 'There was a problem while logging you out.')
    })
  }
}
