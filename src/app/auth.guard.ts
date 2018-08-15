import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { resolve } from '../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private firebase: FirebaseService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // holy sh ng
    return new Promise((resolve, reject) => {
      this.firebase.isLoggedIn().subscribe(flag => {

        if (flag) {
          return resolve(true)
        }

        const [returnUrl, returnQueryParams] = state.url.split('?')
        this.router.navigate(['/login'], { queryParams: { returnUrl, returnQueryParams } })

        return resolve(false);
      })

    })
  }

  canActivateChild() { return !!this.firebase.user; }
}
