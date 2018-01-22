import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { CouponService } from "app/services/coupon/coupon.service";
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.css']
})
export class CouponManagementComponent implements OnInit {
  public coupons=[];
  public totalCoupon:number=0;
  public defaultPageNumber:any = 1;
  public perPageItem:number = 10;
  loading: boolean;
  currentPageNumber: number = 1;
  public isSearching:boolean = false;
  public searchValue:string='';
  constructor(private couponService:CouponService) { }

  ngOnInit() {
    this.getPage(this.defaultPageNumber);
  }

  // getPage(event){
  //   this.loading = true;
  //   let pageNumber = parseInt(event);
  //   this.coupons = this.couponService.getCoupons(pageNumber).do(res => {
  //               this.totalCoupon = res.totalCoupon;
  //               this.currentPageNumber = pageNumber
  //               this.loading = false;
  //           })
  //           .map(res => res.data);
  // }
  getPage(event){
    this.loading = true;
    let pageNumber = parseInt(event);
    if(this.searchValue == ''){
      this.isSearching = false;
    }
    if(this.isSearching){
      let searchTerm = {"coupon":this.searchValue};
      let userType = "coupon";
      this.couponService.searchCoupon(pageNumber,userType,searchTerm).subscribe(res => {
        this.coupons = res.data;
        console.log("inside res",res);
                this.totalCoupon = res.totalCoupon;
                this.currentPageNumber = pageNumber
                this.loading = false;
            },err=>{
              this.coupons=[];
              this.loading = false;
              console.log("inside err",err)

            })
    }
    else{
         this.couponService.getCoupons(pageNumber).subscribe(res => {
          this.coupons =res.data
                this.totalCoupon = res.totalCoupon;
                this.currentPageNumber = pageNumber
                this.loading = false;
            },err=>{
              this.coupons=[];
              this.loading = false;
              console.log("inside err",err)

            })

    }

  }
  onChange(coupon,event){
    let publish_status = {
        "status":"",
        "id": coupon._id
      };
    publish_status.status = event ? "publish" : "unpublish";
    this.couponService.updatePublishState(publish_status).subscribe(data => {
      console.log(data.message);
    },
    error => {
      console.log(error);
    });
  }

  searchUser(){
    this.isSearching = true;
    this.getPage(this.defaultPageNumber);
  }

}
