import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


interface Todo {
  title: string,
  description: string,
  status?: string,
  deadline?: Date
}

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: '',
    status: '',
    deadline: null
  }
  possibleTitles: string[]
  titlePlaceholder: string

  constructor(private firebase: FirebaseService) {
    this.possibleTitles = ['Buy groceries', 'Walk the dog', 'Start that project', 'Check email', 'Meet with SO', 'Hit the gym', 'Read']
    let max = this.possibleTitles.length - 1
    let min = 0
    let index = Math.floor(Math.random() * (max - min + 1)) + min

    this.titlePlaceholder = this.possibleTitles[index]

    console.log(index, this.titlePlaceholder)
  }

  ngOnInit() {
  }

  create(event) {
    event.preventDefault()
    console.log(this.firebase.addTodo(this.todo))
  }

}
