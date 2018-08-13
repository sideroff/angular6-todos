import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private firebase: FirebaseService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let loggedIn = !!this.firebase.instance.auth().currentUser;

    if (loggedIn) return true;
    
    const [returnUrl, returnQueryParams] = state.url.split('?');
    this.router.navigate(['/login'], { queryParams: { returnUrl, returnQueryParams } });

    return false;
  }

  canActivateChild() { return false; }
}
