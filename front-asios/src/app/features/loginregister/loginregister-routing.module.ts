import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginregisterComponent } from './loginregister.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { AuthGuardService } from '../../services/core/guards/auth-guard.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotPass',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'verification',
    canActivate: [AuthGuardService],
    component: VerificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginregisterRoutingModule { }
