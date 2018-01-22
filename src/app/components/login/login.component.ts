import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data: string = '';
  status: number;

  constructor(private loginService: LoginService, private appLocalStorage:LocalStorageService,private router:Router) {
    let adminData =  appLocalStorage.getLoginInfo();
    if(adminData){
      //admin is logged in
      this.router.navigate(['/user']);
    } 
    else{
      this.router.navigate(['/login']);
    } 
  }

  ngOnInit() {
    this.status = 200;
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,Validators.required)
    });
  }
  
  login(){
    this.loginService.postSigninInfo(this.loginForm.value).subscribe(result => {
            if(result.error){
              this.status = 400;
              this.data = "Your email or password may be wrong!"
            }
            else{
              // login was successful
              this.appLocalStorage.setLoginInfo(result);
              this.appLocalStorage.setUserDetails(result);
              this.router.navigate(['/user']);
            }
         },
         error => {
             console.log(error);
             this.status = 500;
             this.data = error;
         });
  }
}
