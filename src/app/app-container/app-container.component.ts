import { Component, OnInit } from '@angular/core';
import data from "../../assets/json/data.json";

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  appData: any;
  constructor() {
    this.appData = data;
  }

  ngOnInit() {
    console.log(this.appData)
  }

}
