import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService} from '../../services/local-storage/local-storage.service';

declare var $: any;

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

	isLoggedin : Boolean;
	toggleCollapsed : String = 'collapse';
  	constructor(private localStorage:LocalStorageService,private route:Router) { 
			this.isLoggedin = this.localStorage.getSessionId();
			if(!this.isLoggedin){
				this.route.navigate(['/login']);
			} 
  	}

	ngOnInit() {
	}
	
	logout(){
		this.localStorage.clear();
	}

	dropDown(){
		console.log("this:"+this.toggleCollapsed);
		this.toggleCollapsed = this.toggleCollapsed === 'collapse' ? 'collapsed': 'collapse';
	}

}
