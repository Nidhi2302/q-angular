import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { LeftpanelComponent } from '../../leftpanel/leftpanel.component';
import { UserService } from 'app/services/user/user.service';


@Component({
  selector: 'app-totalcoupons',
  templateUrl: './totalcoupons.component.html',
  styleUrls: ['./totalcoupons.component.css']
})
export class TotalcouponsComponent implements OnInit {

  public users:Observable<string[]>;
  public topVendors=0;
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
    this.userService.getTotalVendorsCoupons(pageNumber).subscribe(res => {
      self.totalUser = res.totalVendor;
      self.perPageItem = res.maxRecord
      self.currentPageNumber = pageNumber
      self.topVendors = res.vendors
      this.loading = false;
    });


  }

}
