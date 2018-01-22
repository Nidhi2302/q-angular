import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppHttpService } from "app/services/app-http/app-http.service";

@Injectable()
export class CouponService {
  adminUrl = "/api/v1/admin";

  constructor(private appHttp:AppHttpService) { }

  getCoupons(page){
    return this.appHttp.get(this.adminUrl+'/coupons/'+page).map(res => res.json())
      .catch(this.handleError);
  }
  searchCoupon(page,type,term) {
    return this.appHttp.post(this.adminUrl+'/search/'+page,term).map(res => res.json())
      .catch(this.handleError);
  }
  updatePublishState(body){
    return this.appHttp.post(this.adminUrl+'/coupon/publish',body).map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response | any){
    const body = error.json() || '';
    return Observable.throw(body);
  }

}
