import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClosed: boolean;
  constructor() {

  }
  buttonSwitch() {
    const overlay = $('.overlay');
    const trigger = $('.hamburger');
    if (this.isClosed === true) {
      $('.sidebar-nav-color span').hide();
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      this.isClosed = false;
    } else {
      setTimeout(function () {
        $('.sidebar-nav-color span').show();
      }, 500);

      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      this.isClosed = true;
    }
    $('#wrapper').toggleClass('toggled');
  }
  ngOnInit() {
    this.isClosed = false;
    $('.sidebar-nav-color span').hide();
  }

}
