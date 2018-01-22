import { Component, OnInit, ComponentRef } from '@angular/core';
import { ModalDialogModule, IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-vendor-video-popup',
  templateUrl: './vendor-video-popup.component.html',
  styleUrls: ['./vendor-video-popup.component.css']
})
export class VendorVideoPopupComponent implements IModalDialog {
  videoURL:any;
  vendor_id:any;
  actionButtons: IModalDialogButton[];
  constructor(private userService:UserService) {
    console.log("inside videopopup")
    this.actionButtons = [
      {
        text: 'Save', onAction: () => {
          let params={
            video_url:this.videoURL,
            id: this.vendor_id
          }
          console.log(params);
          this.userService.saveVideo(params).subscribe(res=>{
           console.log("video  url saved");
          },err=>{
           console.log("Error",err);
          })
          return true;
        }
      },
      {
        text: 'Cancel', onAction: () => {
          // let params={
          //   video_url:this.videoURL,
          //   id: this.vendor_id
          // }
          // console.log(params);
          // this.userService.saveVideo(params).subscribe(res=>{
          //  console.log("video  url saved");
          // },err=>{
          //  console.log("Error",err);
          // })
          return true;
        }
      },

    ];
  }
  dialogInit(reference: ComponentRef<IModalDialog>, options?: IModalDialogOptions) {
    console.log("init method",options)
    this.vendor_id=options.data.id;
    this.videoURL=options.data.video_url;
  };


}
