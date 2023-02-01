import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"product",
    component: ProductComponent
  },
  {
    path:"customer",
    component: CustomerComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path:"**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
