import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { LocalStorageService } from './../local-storage/local-storage.service';

@Injectable()
export class AppHttpService {
  private hostUrl = environment.API_URL;

  constructor(public http: Http, private router: Router, public localStorage: LocalStorageService) { }

  getHeader(headerOptions, params = {}, doNotSendAuthorizationParam){
    var headerParams = {'Content-Type': 'application/json'};
    if(doNotSendAuthorizationParam !== true){
      //send authorization param
      headerParams['x-auth-token'] = this.localStorage.getSessionId();
    }
    if(headerOptions){
      Object.assign(headerParams, headerOptions);
    }

    let qParams: URLSearchParams = new URLSearchParams();
    for(let key in params){
      qParams.set(key, params[key]);
    }

    let headers = new Headers(headerParams);
    let req = new RequestOptions({ headers: headers });
    req.search = qParams;
    return req;
  }

  get(url, params:any = {}, headerOptions:any = {}, doNotSendAuthorizationParam:boolean = false){
    let options = this.getHeader(headerOptions, params, doNotSendAuthorizationParam);
    console.log(this.hostUrl+url, options);
    return this.http.get(this.hostUrl+url, options).catch(this.handleError);
  }

  post(url, params:any = {}, headerOptions:any = {}, doNotSendAuthorizationParam:boolean = false){
    let options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
    return this.http.post(this.hostUrl+url, params, options).catch(this.handleError);
  }

  put(url, params:any = {}, headerOptions:any = {}, doNotSendAuthorizationParam:boolean = false){
    let options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
    return this.http.put(this.hostUrl+url, params, options).catch(this.handleError);
  }

  delete(url,headerOptions:any = {}, doNotSendAuthorizationParam:boolean = false){
    let options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
    return this.http.delete(this.hostUrl+url,options).catch(this.handleError);
  }

  handleError(error: Response | any){
    const body = error || '';
    if(body.error && body.error.code == 401){
      this.router.navigate(['/login']);
    }
    else if(body.error && body.error.code == 403){
    }

    return Observable.throw(body);
  }

}
