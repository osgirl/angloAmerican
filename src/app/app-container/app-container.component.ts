import { Component, OnInit } from '@angular/core';
import { AppContainerService } from './app-container.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  private tilesData: Array<object> = [];
  private urlData: Array<object> = [];
  constructor(private apiService: AppContainerService) {
  }

  ngOnInit() {
    this.getTilesData();
    this.getUrlsData();
  }

  getTilesData() {
    this.apiService.getConfig().subscribe((data: Array<object>) => {
      this.tilesData = data;
    });
  }

  getUrlsData() {
    this.apiService.getUrl().subscribe((data: Array<object>) => {
      this.urlData = data;
    });
  }
}
