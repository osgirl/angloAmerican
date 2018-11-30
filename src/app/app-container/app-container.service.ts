import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppContainerService {
  configUrl: any;
  url:any;
  constructor(private httpClient: HttpClient) {
  }
  

  getConfig() {
    this.configUrl = '../../assets/json/data.json';
    return this.httpClient.get(this.configUrl);
  }

  endpoint = 'http://mneu-api-d-da-001.azurewebsites.net/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUrl(): Observable<any> {
    return this.httpClient.get(this.endpoint + 'urls');
  }

 /* getUrl(){
    this.url = 'http://mneu-api-d-da-001.azurewebsites.net/api/urls';
    return this.httpClient.get(this.url);
  }*/
}


