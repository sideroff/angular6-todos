import { Component, OnInit } from '@angular/core';

interface Link {
  routerLink: string,
  routerLinkActive: string,
  routerLinkActiveOptions: string,
  icon: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  links$: Link[]

  constructor() {
    this.links$ = [
      {
        routerLink: 'active',
        routerLinkActive: 'active',
        routerLinkActiveOptions: '{exact: true}',
        icon: 'notes'
      },
      {
        routerLink: 'done',
        routerLinkActive: 'active',
        routerLinkActiveOptions: '{exact: true}',
        icon: 'done'
      },
      {
        routerLink: 'profile',
        routerLinkActive: 'active',
        routerLinkActiveOptions: '{exact: true}',
        icon: 'person'
      },
    ]
  }

  ngOnInit() {
  }

}
