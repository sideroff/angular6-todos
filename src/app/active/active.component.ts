import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { VexService } from '../vex.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  items: Observable<any[]>;
  userId: string;

  constructor(public firebase: FirebaseService, public vex: VexService) {
    this.items = firebase.getActiveTodos()
  }

  markTodoAsDone(todo) {
    console.log('marking todo as done')
    this.firebase.markTodoAsDone(todo).then(response => {
      this.vex.instance.dialog.alert('Todo marked as done successfully!')
    }).catch(error => {
      this.vex.instance.dialog.alert('Something went wrong while marking todo as done.')
    })
  }
}
