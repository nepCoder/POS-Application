import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TopProductsComponent } from './top-products/top-products.component';
import { WorstProductsComponent } from './worst-products/worst-products.component';
import { ExpiringProductsComponent } from './expiring-products/expiring-products.component';
import { ExpiredProductsComponent } from './expired-products/expired-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent, TopProductsComponent, WorstProductsComponent, ExpiringProductsComponent, ExpiredProductsComponent],

  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class HomeModule { }
