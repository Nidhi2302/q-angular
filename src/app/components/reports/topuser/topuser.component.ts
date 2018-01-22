import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { LeftpanelComponent } from '../../leftpanel/leftpanel.component';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-topuser',
  templateUrl: './topuser.component.html',
  styleUrls: ['./topuser.component.css']
})
export class TopuserComponent implements OnInit {
  public users:Observable<string[]>;
  public topUsers=0;
  public totalUser:number=0;
  public defaultPageNumber:any = 1;
  public perPageItem:number = 10;
  loading: boolean;
  currentPageNumber = 1;
  public isSearching = false;
  constructor(public userService: UserService) {
   // this.getPage(this.defaultPageNumber);
  }

  ngOnInit() {
    console.log("hello");
    this.getPage(this.defaultPageNumber);
  }
  getPage(event){
    let self = this;
    this.loading = true;
    let pageNumber = parseInt(event);
    this.userService.getTopUsers(pageNumber).subscribe(res => {
      self.totalUser = res.totalUser;
      self.perPageItem = res.maxRecord
      self.currentPageNumber = pageNumber
      self.topUsers = res.users
      this.loading = false;
    });


  }

}
