import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/_service/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.estaLogueado()) {
      this.router.navigate(['/profile']);
      return false;
    }
    return true;
  }
}
