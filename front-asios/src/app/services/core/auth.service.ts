import { Injectable } from '@angular/core';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storageKey = ConstantService.localStorageKeys.token;
  userDataKey = ConstantService.localStorageKeys.userData;
  logout_success?: string;
  logout_msg?: string;

  constructor(
    private router: Router
    ) {}

    /**
     * Funcion para logout un usuario y navegar a la pagina de inicio de sesion
     */
    logoutUser(){
      localStorage.clear();
      this.removeToken();

      this.router.navigate(['/login']);
    }

    /**
     * Funcion que devuelve la clave token que obtiene el usuario cuando inicia sesion
     * @returns tokenKey
     */
    getToken(){
      return localStorage.getItem(this.storageKey);
    }

    /**
     * Funcion que hace un set de la clave token cuando el usuario inicia sesion
     * @param token
     */
    setToken(token: string){
      localStorage.setItem(this.storageKey, token);
    }

    /**
     * Funcion usada para borra token de la local storage, incluyendo user y storage
     */
    removeToken(){
      localStorage.removeItem(this.storageKey);
      localStorage.removeItem(this.userDataKey);
    }


    /**
     * Funcion que notifica si al usuario se le ha asignado algun token entonces devuelve true, si no false
     */
    isAuthenticated(): boolean {
      if(this.getToken()){
        return true;
      }
      return false;
    }
}
