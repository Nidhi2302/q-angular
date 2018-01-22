import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { LoginComponent } from './components/login/login.component';
 import { UserManagementComponent } from "app/components/user-management/user-management.component";
 import { CouponManagementComponent } from "app/components/coupon-management/coupon-management.component";
 import { ReportsComponent } from "app/components/reports/reports.component";
 import { VendorManagementComponent } from "app/components/vendor-management/vendor-management.component";
 import { NotificationManagementComponent } from "app/components/notification-management/notification-management.component";
 import { TopvendorComponent } from 'app/components/reports/topvendor/topvendor.component';
 import { TopuserComponent } from "app/components/reports/topuser/topuser.component";
 import { TotalcouponsComponent } from "app/components/reports/totalcoupons/totalcoupons.component";
 import { TotalCouponsReferredComponent } from 'app/components/reports/total-coupons-referred/total-coupons-referred.component';
 import { TotalCouponsRedeemedComponent } from 'app/components/reports/total-coupons-redeemed/total-coupons-redeemed.component';


 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'login' },
   { path: 'login', component: LoginComponent },
   { path: 'user',component: UserManagementComponent},
   { path: 'vendor',component: VendorManagementComponent},
   { path: 'coupon', component: CouponManagementComponent },
   { path: 'notification', component: NotificationManagementComponent },
   { path: 'reports', component: ReportsComponent },
   { path: 'topvendor', component: TopvendorComponent },
   { path: 'topuser', component: TopuserComponent },
   { path: 'totalcoupons', component: TotalcouponsComponent },
   { path: 'totalcouponsreferred', component: TotalCouponsReferredComponent },
   { path: 'totalcouponsredeemed', component: TotalCouponsRedeemedComponent}
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
