import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})


export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  //Clonar y añadir una header cuando se llame a una api,
  //pasamos data a la api y headers con autorization content y token type
  //Se llama a si misma cada vez que llamemos a una api
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.auth.getToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `${this.auth.getToken()}`,
          'Content-Type': 'application/jason'
        }
      });
    }
    return next.handle(req);
  }


}
