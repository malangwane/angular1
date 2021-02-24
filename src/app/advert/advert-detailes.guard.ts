import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertDetailesGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['/Advert']);
            // abort current navigation
            return false;
        };
    return true;
  }
  
}
