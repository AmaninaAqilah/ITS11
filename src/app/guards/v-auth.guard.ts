import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { VAuthService } from '../services/v-auth.service';

@Injectable()
export class VAuthGuard implements CanActivate {
  constructor(
    private vauth: VAuthService,
    private router: Router
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.vauth.vendor$
    .pipe(
      take(1),
      map(vendor => vendor ? true : false),
      tap(isLoggedIn => {
        if(!isLoggedIn){
          this.router.navigate(['/vlog']);
          return false;
        }
        return true;
      })
    );
  }
  
}
