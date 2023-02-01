import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private router:Router){}

  panelOpenState:boolean=false;
  title = 'firstApp';
  navList = [
    {item:"home", isActive:false, icon: 'home' },
    {item:"customer", isActive: false, icon: 'people'},
    {item: "product", isActive:false, icon: 'folder'},
    {item: "transaction", isActive:false, icon: 'monetization_on'},
    {item: "invoice", isActive:false, icon: 'payment'}
];

  ngOnInit(){ };

  activateNav(nav:string){
    for (let i=0; i<this.navList.length; i++){
      if('/'+this.navList[i].item==nav){this.navList[i].isActive = true;}
      else {this.navList[i].isActive = false;}
    }
  }

}






