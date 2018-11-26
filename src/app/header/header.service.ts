import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  configUrl: any;
  constructor(private httpClient: HttpClient) {

  }

  logutUser() {
    this.configUrl = '../../assets/json/logout.json';
    return this.httpClient.get(this.configUrl);
  }
}
