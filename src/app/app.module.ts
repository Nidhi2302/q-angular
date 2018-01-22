import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UiSwitchModule } from 'angular2-ui-switch/src'; // put src here because some-time this module doesn't found at comile time.
import { NgxPaginationModule } from 'ngx-pagination';

// routing module
import { AppRoutingModule } from './app.routing';
// For modal
import { ModalDialogModule } from 'ngx-modal-dialog';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// services
import { AppHttpService } from './services/app-http/app-http.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { LoginService } from 'app/services/login.service';
import { LeftpanelComponent } from './components/leftpanel/leftpanel.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CouponManagementComponent } from './components/coupon-management/coupon-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';
import { NotificationManagementComponent } from './components/notification-management/notification-management.component';
import { UserService } from 'app/services/user/user.service';
import { CouponService } from 'app/services/coupon/coupon.service';
import { TopvendorComponent } from './components/reports/topvendor/topvendor.component';
import { TopuserComponent } from './components/reports/topuser/topuser.component';
import { TotalcouponsComponent } from './components/reports/totalcoupons/totalcoupons.component';
import { TotalCouponsReferredComponent } from './components/reports/total-coupons-referred/total-coupons-referred.component';
import { TotalCouponsRedeemedComponent } from './components/reports/total-coupons-redeemed/total-coupons-redeemed.component';
import { VendorVideoPopupComponent } from './components/vendor-video-popup/vendor-video-popup.component';
import { DeleteAlertComponent } from './components/delete-alert/delete-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftpanelComponent,
    UserManagementComponent,
    CouponManagementComponent,
    ReportsComponent,
    VendorManagementComponent,
    NotificationManagementComponent,
    TopvendorComponent,
    TopuserComponent,
    TotalcouponsComponent,
    TotalCouponsReferredComponent,
    TotalCouponsRedeemedComponent,
    VendorVideoPopupComponent,
    DeleteAlertComponent
  ],
  entryComponents: [VendorVideoPopupComponent,
    DeleteAlertComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    AppRoutingModule,
    NgxPaginationModule,
    ModalDialogModule.forRoot()
  ],
  providers: [AppHttpService, LocalStorageService, LoginService, UserService, CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
