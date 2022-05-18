import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})

//Si esta autenticado ira al dashboard, si no ira a la login page o register page
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  //Para la home feature
  canActivate() {
    if (this.auth.getToken()) {
      return true;
    } else {
      if (this.router.url === "/register") {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
