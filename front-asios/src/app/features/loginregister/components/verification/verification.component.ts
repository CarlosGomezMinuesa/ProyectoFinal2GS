import { Component, OnInit } from '@angular/core';
import { LoginregisterService } from 'src/app/services/common/loginregister/loginregister.service';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { CompilerService } from 'src/app/shared/compiler/compiler.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ActivatedRoute } from '@angular/router';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  email?: String;

  constructor(
    private loginRegisterService: LoginregisterService,
    private helperService: HelperService,
    private compilerService: CompilerService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.email = JSON.parse(params['email']);
    })
  }

  resendVerifyEmail(){
    this.loginRegisterService.resendEmail({'email': this.email}).subscribe((res) => {
      this.helperService.createSnackBar(
        ConstantService.errorMessages.checkEmail
      )
    })
  }

}
