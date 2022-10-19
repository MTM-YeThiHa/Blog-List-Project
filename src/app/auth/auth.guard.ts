import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.loggedInStatus) { return true; }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    //Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  
  constructor (private authService: AuthService, private router: Router) { }
}
