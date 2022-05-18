import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiRoutes: any;

  constructor(
    private httpClient: HttpClient,
    private constantService: ConstantService) {
      this.apiRoutes = ConstantService.apiRoutes;
    }

  logoutUser() {
    return this.httpClient.post(this.apiRoutes.logout, {});
  }

}
