import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {



  ngOnInit(){

}

  tiles = [
    {name:'top', cols: 2, rows: 3, color:'yellow'},
    {name:'worst', cols: 1, rows: 3, color:'red',},
    {name:'expired', cols: 1, rows: 1, color:'purple'},
    {name:'expiring', cols: 1, rows: 2, color:'blue'}
  ];

  cardData = [
    {title:'2849', subtitle:'Total Transactions', color:'lightgreen'},
    {title:'NPR 23,789.67', subtitle:'Total Profit', color:'orange'},
    {title:'29', subtitle:'New Customers', color:'lightblue'},
    {title:'7', subtitle:'Outlets Running', color:'lightpink'}
  ]

  dateToday:any;
  constructor(private app: AppComponent, private router:Router){
    app.activateNav(this.router.url);
    this.dateToday = new Date
  }

}
