import { Component, OnInit } from '@angular/core';
// var $ = require('./../../node_modules/jquery321/jquery-3.2.1.min.js');

declare var window:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.clear();
  }
}
