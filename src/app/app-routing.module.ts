import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveComponent } from './active/active.component';
import { DoneComponent } from './done/done.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActiveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todo/:id',
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'done',
    component: DoneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
