import { Component, OnInit, ComponentRef } from '@angular/core';
import { ModalDialogModule, IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements IModalDialog {
  user_id:any;
  msg:any;
  actionButtons: IModalDialogButton[];
  constructor(private userService:UserService) {
    console.log("inside videopopup")
   
  }
  dialogInit(reference: ComponentRef<IModalDialog>, options?: IModalDialogOptions) {
    console.log("init method",options)
    this.user_id=options.data._id;
    this.msg="Are you sure you want to delete "+options.data.username+" ?";
  };


}
