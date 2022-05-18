import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginregisterService } from 'src/app/services/common/loginregister/loginregister.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  data: any;
  resetPassForm!: FormGroup;
  resp: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginRegisterService: LoginregisterService
  ) {
    this.route.queryParams.subscribe(data => {
      this.data = data;
      if (!this.data.uid || !this.data.token) {
        this.router.navigate(['/login']);
      }
    })
  }

  ngOnInit(): void {
    this.resetPassForm = this.formBuilder.group({
      password: ['', Validators.required]
    })
  }

  get formValidation() {
    return this.resetPassForm.controls;
  }

  resetPassword(){
    if (!this.resetPassForm.invalid) {
      var data = {
        id: this.data.uid,
        token: this.data.token,
        password: this.resetPassForm.value.password
      }
      this.loginRegisterService.resetPassword({data}).subscribe((data) => {
        this.resp = data;
        this.router.navigate(['/login']);
      })
    }
  }

}
