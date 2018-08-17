import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { VexService } from '../vex.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent {

  title: string = ''
  description: string = ''
  status?: string = null
  deadline?: Date = null

  possibleTitles: string[]
  titlePlaceholder: string
  isCreatingTodo: boolean

  constructor(private router: Router, private firebase: FirebaseService, private vex: VexService) {
    this.possibleTitles = ['Buy groceries', 'Walk the dog', 'Start that project', 'Check email', 'Meet with SO', 'Hit the gym', 'Read']
    let max = this.possibleTitles.length - 1
    let min = 0
    let index = Math.floor(Math.random() * (max - min + 1)) + min

    this.titlePlaceholder = this.possibleTitles[index]
  }

  create(todoForm) {
    this.isCreatingTodo = true;

    this.firebase.addTodo(todoForm.value).then(response => {
      this.isCreatingTodo = false;
      this.router.navigateByUrl('/active')
    }).catch(error => {
      this.isCreatingTodo = false;
      this.vex.instance.dialog.alert(error.message || 'There was a problem while creating the todo.')
    })
  }

}
