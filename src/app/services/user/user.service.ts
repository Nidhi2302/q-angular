import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';

import { AppHttpService } from '../app-http/app-http.service';
@Injectable()
export class UserService {
  adminUrl = "/api/v1/admin";

  constructor(public appBaseService : AppHttpService) { }

  getAllUsers = (page)=>{
    return this.appBaseService.get(this.adminUrl+'/getUsers/'+page).map(res => res.json())
      .catch(this.handleError);
  }
  getAllVendors = (page)=>{
    return this.appBaseService.get(this.adminUrl+'/vendor/'+page).map(res => res.json())
      .catch(this.handleError);
  }
  getTopVendors = (page)=>{
    return this.appBaseService.get(this.adminUrl+'/get-top-store/'+page).map(res => res.json()).share()
      .catch(this.handleError);
  }
  getTopUsers = (page)=>{

    return this.appBaseService.get(this.adminUrl+'/get-top-users/'+page).map(res => res.json()).share()
      .catch(this.handleError);
  }
  getTotalVendorsCoupons = (page)=>{

    return this.appBaseService.get(this.adminUrl+'/get-total-vendors-coupons/'+page).map(res => res.json()).share()
      .catch(this.handleError);
  }
  getTotalVendorsCouponsRefeers = (page)=>{

    return this.appBaseService.get(this.adminUrl+'/get-total-vendors-couponsrefeered/'+page).map(res => res.json()).share()
      .catch(this.handleError);
  }
  getTotalVendorsCouponsRedeemed = (page)=>{
        return this.appBaseService.get(this.adminUrl+'/get-total-vendors-couponsredeemed/'+page).map(res => res.json()).share()
          .catch(this.handleError);
      }
  updateBlockStatus = (user) => {
    return this.appBaseService.post(this.adminUrl+'/block',user).map(res => res.json()).share()
      .catch(this.handleError);
  }

  updateVerificationStatus = (user) => {
    return this.appBaseService.post(this.adminUrl+'/verify',user).map(res => res.json()).share()
      .catch(this.handleError);
  }

  searchUser = (page,type,term) => {
    return this.appBaseService.post(this.adminUrl+'/search/'+type+'/'+page,term).map(res => res.json())
      .catch(this.handleError);
  }

  notifyUsers = (param) => {
    return this.appBaseService.post(this.adminUrl+'/notify-to-all/',param).map(res => res.json())
      .catch(this.handleError);
  }
  getNotification = (page) => {
    return this.appBaseService.get(this.adminUrl+'/notification/'+page).map(res => res.json())
      .catch(this.handleError);
  }
  deletUser = (id) => {
    return this.appBaseService.delete(this.adminUrl+'/delete-user/'+id).map(res => res.json())
      .catch(this.handleError);
  }
  saveVideo=(param)=>{
    return this.appBaseService.post(this.adminUrl+'/save-vendor-video/',param).map(res => res.json())
    .catch(this.handleError);
  }
  getVideo=(id)=>{
    return this.appBaseService.get(this.adminUrl+'/get-vendor-video/'+id).map(res => res.json())
    .catch(this.handleError);
  }
  handleError(error: Response | any){
    const body = error.json() || '';
    return Observable.throw(body);
  }

}
