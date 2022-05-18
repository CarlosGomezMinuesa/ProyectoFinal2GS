import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  //Este archivo concentra todas las rutas y apis de la app,
  //static para poder acceder desde toda la app, asi no necesitamos
  //crear objetos en cada componente.

  constructor() { }

  static apiRoutes = {
    login: `${environment.apiUrl}/appusers/login`,
    register: `${environment.apiUrl}/appusers`,
    sendverifyemail: `${environment.apiUrl}/appusers/sendEmail`,
    forgotPassword: `${environment.apiUrl}/appusers/reset`,
    resetPassword: `${environment.apiUrl}/appusers/updateForgetPassword`,
    logout: `${environment.apiUrl}/appusers/logout`,
  }

  static apiMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  }

  static localStorageKeys = {
    token: 'User_Token',
    userData: 'User_Data'
  }

  static errorMessages = {
    noMailExist: "Información no válida",
    unknownError: "Error desconocido, por favor intentelo de nuevo",
    formError: "Error de Formulario",
    checkEmail: "Se le ha enviado un correo",
    categoryExists: "Ya existe una categoria con ese nombre",
    noteExists: "Ya existe una nota con el mismo título",
    notVerified: "Email no verificado",
    currentPassword: "Contraseña no válida",
    alreadyExist: "Ya existe una cuenta con ese correo o nombre de usuario"
  }

  static successMessages = {
    userLoggedIn: "Usuario ha iniciado sesión"
  }
}

