import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


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


