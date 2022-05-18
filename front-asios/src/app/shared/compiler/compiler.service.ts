import { Injectable } from '@angular/core';
import { RegisterUser } from 'src/app/models/user.model';
import { LoginUser, LoginUserResponse } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})

//Compila data para poder enviar
//concretamente lo que queramos a la api y componentes
export class CompilerService {

  constructor() { }

  constructRegisterUserObject(userData: RegisterUser) {
    let modifiyData = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      email: userData.email,
      password: userData.password
    }

    return modifiyData
  }

  constructLoginUserObject(userData: LoginUser) {
    let modifiedData = {
      email: userData.email,
      password: userData.password
    }

    return modifiedData;
  }

  constructAfterLoginUserData(loginApiResponse: LoginUserResponse){
    let loginData = {
      userId: loginApiResponse.userId,
      superuserId: loginApiResponse.superuserId,
      username: loginApiResponse.superuser.username
    }

    return loginData;
  }
}
