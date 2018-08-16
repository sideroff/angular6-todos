import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  items: Observable<any[]>;
  userId: string;

  constructor(firebase: FirebaseService) {
    this.items = firebase.getActiveTodos()
  }
}
