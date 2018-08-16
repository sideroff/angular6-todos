import { Component, } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent {
  items: Observable<any[]>;
  userId: string;

  constructor(firebase: FirebaseService) {
    this.items = firebase.getDoneTodos()
  }

}
