import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  notificationForm: FormGroup;
  public notifedMsgs=[];
  public defaultPageNumber:any = 1;
  public perPageItem:number = 10;
  currentPageNumber: number = 1;
  public totalMsg:number=0;
  loading: boolean;
  devices:any[] = [
    {
      "name":"Android",
      "checked":false
    },
    {
      "name":"iOS",
      "checked":true
    },
    {
      "name":"All",
      "checked":false
    }
  ];
  // groups:any[] = [
  //   {
  //     "name":"vendor",
  //     "checked":false
  //   },
  //   {
  //     "name":"users",
  //     "checked":false
  //   },
  //   {
  //     "name":"Frequent Buyers",
  //     "checked":false
  //   },
  //   {
  //     "name":"All",
  //     "checked":true
  //   }
  // ];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.notificationForm = new FormGroup({
      'device': new FormControl(this.devices[1].name,[Validators.required]),
      // 'group': new FormControl(null,Validators.required),
      // "title": new FormControl(null,Validators.required),
      "description": new FormControl(null,Validators.required)
    });
    console.log(this.notifedMsgs);
    this.getNotification(this.defaultPageNumber);
  }

  sendNotification(){
    let param={
      device_type:this.notificationForm.value.device,
      msg:this.notificationForm.value.description
    }
    this.userService.notifyUsers(param).subscribe(res=>{
      console.log("res",res)
     this.getNotification(this.defaultPageNumber);
    },err=>{
      console.log("err",err)
    })
    
  }
getNotification(event){
  this.loading = true;
  let pageNumber = parseInt(event);
  this.userService.getNotification(pageNumber).subscribe((res)=>{
    console.log("res",res)
    this.loading = false;
    this.totalMsg = res.totalMsg;
    this.currentPageNumber = pageNumber;
    this.notifedMsgs=res.data
  },err=>{
    console.log("err",err)
  })
}
}
