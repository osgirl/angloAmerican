import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppContainerService {
  configUrl: any;
  constructor(private httpClient: HttpClient) {

  }
  getConfig() {
    this.configUrl = '../../assets/json/data.json';
    return this.httpClient.get(this.configUrl);
  }
}


