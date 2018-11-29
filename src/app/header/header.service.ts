import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  configUrl: any;
  constructor(private httpClient: HttpClient,private adalSvc: MsAdalAngular6Service) {
      }
  username:string = localStorage.getItem('username');

  logutUser() {
    this.adalSvc.logout();
    //this.configUrl = '../../assets/json/logout.json';
    //return this.httpClient.get(this.configUrl);
  }
}
