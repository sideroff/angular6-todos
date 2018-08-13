import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ActiveComponent } from './active/active.component';
import { DoneComponent } from './done/done.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'done',
    component: DoneComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
