import { Component } from '@angular/core';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private adalSvc: MsAdalAngular6Service) {
    
      // var user:any;
        //console.log(this.adalSvc.userInfo);
        if(!this.adalSvc.isAuthenticated)
        {
         adalSvc.login();
          }
         var user:any;
         user=this.adalSvc.userInfo;
         let username = user.profile.given_name;
         localStorage.setItem('username', user.profile.given_name);
         var token = this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
         console.log(token);
         });
       
      } 

      
}
