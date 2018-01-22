import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  topVendor:boolean = true;
  topEndUser:boolean = false;
  referredCoupons:boolean = false;
  redeemedCoupons:boolean = false;
  totalCoupons:boolean = false;
  
  topVendors : any[] = [];
  topUsers : any[] = [];


  constructor() { }

  ngOnInit() {
    this.topVendors = [{
        "name": "amazon",
        "email": "amazon@amz.com",
        "coupons": 50
      },
      {
        "name": "e-cart",
        "email": "ecart@ec.com",
        "coupons": 50
      },
      {
        "name": "alibaba",
        "email": "alibaba@alb.com",
        "coupons": 50
      },
      {
        "name": "dineout",
        "email": "dine@dout.com",
        "coupons": 50
      },
      {
        "name": "redbus",
        "email": "redbus@red.com",
        "coupons": 50
      }
    ];
    this.topUsers = this.topVendors;
  }
  
  changeTab(tab){
    this.topEndUser = false;
    this.topVendor = false;
    this.redeemedCoupons = false;
    this.referredCoupons = false;
    this.totalCoupons = false;
    if(tab === "Top EndUser"){
      this.topEndUser = true;
    }
    else if(tab === "Top Vendor"){
      this.topVendor = true;
    }
    else if(tab === "Referred Coupons"){
      this.referredCoupons = true;
    }
    else if(tab === "Redeemed Coupons"){
      this.redeemedCoupons = true;
    }
    else if(tab === "Total Coupons"){     
      this.totalCoupons = true;
    }
  }
}
