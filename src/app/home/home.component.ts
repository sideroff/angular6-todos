import { Component, OnInit } from '@angular/core';
import { VexService } from '../vex.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vex: VexService) { }

  ngOnInit() {
  }

  testing() {
    // toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
    this.vex.instance.dialog.confirm({
      message: 'Are you absolutely sure you want to destroy the alien planet?',
      callback: value => {
        console.log(value)
      }
    })
  }

}
