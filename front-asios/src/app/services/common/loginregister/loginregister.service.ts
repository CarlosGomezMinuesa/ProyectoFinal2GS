import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConstantService } from 'src/app/shared/constant/constant.service';
import { RegisterUser, RegisterUserResponse } from 'src/app/models/user.model';

import { Observable } from 'rxjs';
import { LoginUser, LoginUserResponse } from '../../../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class LoginregisterService {

  apiRoutes: any;

  constructor(
    private httpClient: HttpClient,
    private constantService: ConstantService
  ) {
    this.apiRoutes = ConstantService.apiRoutes;
  }

  registerUser(userData: RegisterUser): Observable<RegisterUserResponse> {
    return this.httpClient.post<RegisterUserResponse>(this.apiRoutes.register, userData);
  }

  loginUser(userData: LoginUser): Observable<LoginUserResponse> {
    return this.httpClient.post<LoginUserResponse>(this.apiRoutes.login, userData);
  }

  resendEmail(data: any) {
    return this.httpClient.post(this.apiRoutes.sendverifyemail, data);
  }

  forgetPassword(data: any){
    return this.httpClient.post(this.apiRoutes.forgotPassword, data);
  }

  resetPassword(data: any){
    return this.httpClient.post(this.apiRoutes.resetPassword, {user: data});
  }
}
