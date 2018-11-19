import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClosed: boolean
  constructor() {

  }
  buttonSwitch() {
    const overlay = $('.overlay');
    const trigger = $('.hamburger');
    if (this.isClosed === true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      this.isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      this.isClosed = true;
    }
    $('#wrapper').toggleClass('toggled');
  }
  ngOnInit() {
    this.isClosed = false;
  }

}
