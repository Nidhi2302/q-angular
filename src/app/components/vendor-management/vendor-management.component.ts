import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UserService } from "app/services/user/user.service";
import { VendorVideoPopupComponent } from 'app/components/vendor-video-popup/vendor-video-popup.component';
import { ModalDialogService } from 'ngx-modal-dialog';
import { DeleteAlertComponent } from 'app/components/delete-alert/delete-alert.component';


@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent implements OnInit {
  public searchValue:string='';
	public vendors=[];
  public totalVendor:number=0;
  public defaultPageNumber:any = 1;
  public perPageItem:number = 10;
  loading: boolean;
  currentPageNumber: number = 1;
  isSuccess: boolean=true;
  public isSearching:boolean = false;

  constructor(private userService : UserService,private modalService: ModalDialogService,private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.getPage(this.defaultPageNumber);
  }

  getPage(event){
    this.loading = true;
    let pageNumber = parseInt(event);
    if(this.searchValue == ''){
      this.isSearching = false;
    }
    if(this.isSearching){
      let searchTerm = {"username":this.searchValue};
      let userType = "vendor";
       this.userService.searchUser(pageNumber,userType,searchTerm).subscribe(res => {
        this.vendors =res.userResults;
                this.totalVendor = res.totalUser;
                this.perPageItem = res.maxRecord
                this.currentPageNumber = pageNumber
                this.loading = false;
            },err=>{
              this.vendors=[];
              this.loading = false;
              console.log("inside err",err)

            })
            
    }
    else{
      this.userService.getAllVendors(pageNumber).subscribe(res => {
        
        this.vendors =res.vendors
              this.totalVendor = res.totalVendor;
              this.perPageItem = res.maxRecord
              this.currentPageNumber = pageNumber
              this.loading = false;
          },err=>{
            this.vendors=[];
            this.loading = false;
            console.log("inside err",err)

          })
          
      }
  }

  changeBlockStatus(event,id){
    let user = {
      "id":id,
      "isBlocked": ''+event
    }
    this.userService.updateBlockStatus(user).subscribe(result => {
    },
    error => {
      console.log(error);
    })
  }

  changeVerificationStatus(event,id){
    let user = {
      "id":id,
      "verified": ''+event
    }
    this.userService.updateVerificationStatus(user).subscribe(result => {
    },
    error => {
      console.log(error);
    })
  }

  searchUser(){
    this.isSearching = true;
    this.getPage(this.defaultPageNumber);
  }
  openNewDialog(vendor) {
    console.log("openNewDialog")
    this.userService.getVideo(vendor._id).subscribe(res=>{
      console.log("saved video",res)
      let video=res.video_url==null ? "": res.video_url ;
      this.modalService.openDialog(this.viewRef, {
        title: "Enter Video URL for "+vendor.username,
        childComponent: VendorVideoPopupComponent,
        data:{
          "id":vendor._id,
          "video_url":video
        }
      });
    },err=>{
      console.log("Error",err)
    })
    
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
