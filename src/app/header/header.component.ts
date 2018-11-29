import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ServiceService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClosed: boolean;
  private message: object;
  username:string;

  constructor(private apiService: ServiceService) {
        this.username=apiService.username;
        console.log(this.username);
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
  logout() {
    /*this.apiService.logutUser().subscribe((data) => {
      this.message = data;
      console.log(data);
    });*/
    this.apiService.logutUser();
  }

}
