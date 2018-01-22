import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppHttpService } from './app-http/app-http.service';

@Injectable()
export class LoginService {

  constructor(public appBaseService : AppHttpService) { }

  postSigninInfo(user){
      return this.appBaseService.post('/api/v1/admin/login', user).map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response | any){
    const body = error.json() || '';
    return Observable.throw(body);
  }

}
