import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  items: Observable<any[]>;
  userId: string;

  constructor(firebase: FirebaseService) {
    this.items = firebase.getActiveTodos()
    console.dir(this.items)
  }

  ngOnInit() {
  }

}
