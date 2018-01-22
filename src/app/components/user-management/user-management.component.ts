import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { LeftpanelComponent } from '../leftpanel/leftpanel.component';
import { UserService } from "app/services/user/user.service";
import { ModalDialogService } from 'ngx-modal-dialog';
import { DeleteAlertComponent } from 'app/components/delete-alert/delete-alert.component';


declare var $: any;
declare var google: any;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  public searchValue: string = '';
  public users = [];
  public totalUser: number = 0;
  public defaultPageNumber: any = 1;
  public perPageItem: number = 10;
  loading: boolean;
  isSuccess: boolean=true;
  currentPageNumber: number = 1;
  public isSearching: boolean = false;

  constructor(private userService: UserService,private modalService: ModalDialogService,private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.getPage(this.defaultPageNumber);
  }

  changeBlockStatus(event, id) {
    let status = {
      "id": id,
      "isBlocked": '' + event
    }
    this.userService.updateBlockStatus(status).subscribe(result => {
    },
      error => {
        console.log(error);
      })
  }

  getPage(event) {
    let self = this;
    this.loading = true;
    let pageNumber = parseInt(event);
    if (this.searchValue == '') {
      this.isSearching = false;
    }
    if (this.isSearching) {
      let searchTerm = { "username": this.searchValue };
      let userType = "user";
      this.userService.searchUser(pageNumber, userType, searchTerm).subscribe(res => {

        this.users = res.userResults;
        self.totalUser = res.totalUser;
        self.perPageItem = res.maxRecord
        self.currentPageNumber = pageNumber
        this.loading = false;
      }, err => {
        this.users = [];
        this.loading = false;
        console.log("inside err", err)

      })

    }
    else {
      this.userService.getAllUsers(pageNumber).subscribe(res => {

        this.users = res.users
        self.totalUser = res.totalUser;
        self.perPageItem = res.maxRecord
        self.currentPageNumber = pageNumber
        this.loading = false;
      }, err => {
        this.users = [];
        this.loading = false;
        console.log("inside err", err)

      })

    }

  }

  searchUser() {
    this.isSearching = true;
    this.getPage(this.defaultPageNumber);
  }

  deleteUser(user,event) {
    console.log("user will be deleted",user);
    this.modalService.openDialog(this.viewRef, {
      title: "Delete",
      childComponent: DeleteAlertComponent,
      data:user,
      actionButtons : [
        {
          text: 'Delete', onAction: () => {
      
            this.userService.deletUser(user._id).subscribe(res=>{
                console.log("user deleted");
                this.isSuccess=false;
                //setTimeout(()=>{this.isSuccess=true},3000)
                this.getPage(event);
              },err=>{
                console.log("user not deleted",err);
              })
            return true;
          }
        },
        {
          text: 'Cancel', onAction: () => {
            return true;
          }
        },
  
      ]
    });
   
  }
  msgClose(){
    this.isSuccess=true;
  }
}
