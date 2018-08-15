import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private firebase: FirebaseService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let flag = !!this.firebase.user

    if (flag) return flag;

    const [returnUrl, returnQueryParams] = state.url.split('?');
    this.router.navigate(['/login'], { queryParams: { returnUrl, returnQueryParams } });

    return false;
  }

  canActivateChild() { return !!this.firebase.user; }
}
