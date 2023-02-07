import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
    // return true;
  }

  // canActivate(route: ActivatedRouteSnapshot): boolean {    // this will be passed from the route config
  //   // on the data property
  //   const expectedRole = route.data.expectedRole;    const token = localStorage.getItem('token');    // decode the token to get its payload
  //   const tokenPayload = decode(token);    if (
  //     !this.auth.isAuthenticated() ||
  //     tokenPayload.role !== expectedRole
  //   ) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
}
