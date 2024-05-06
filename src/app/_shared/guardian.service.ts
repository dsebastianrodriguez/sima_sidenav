import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/_service/auth.service';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {

  private authService = inject(AuthService); private router = inject(Router);
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.estaLogueado() == true) {
      const helper = new JwtHelperService();
      let token = sessionStorage.getItem(environment.TOKEN) ?? '';

      // const decodedToken = helper.decodeToken(token);

      // const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(token);
      const url: string = state.url;

      console.log("Soy url: ",url);
      if (!isExpired) {
        return true;
      } else {
        console.log("entro a expirado: ");
        this.authService.tokenExpired();
        return false;
      }
    } else {
      this.router.navigate(['/error_unauthorized']);
      return false;
    }

  }
}
