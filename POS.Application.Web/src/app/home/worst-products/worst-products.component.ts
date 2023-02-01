import { Component } from '@angular/core';

@Component({
  selector: 'app-worst-products',
  templateUrl: './worst-products.component.html',
  styleUrls: ['./worst-products.component.css']
})
export class WorstProductsComponent {
  worstProducts=[
    {product:'Baby Food', soldCount:345, remaining:4980},
    {product:'Meat', soldCount:345, remaining:4980},
    {product:'Cake', soldCount:345, remaining:4980},
    {product:'Cheese', soldCount:345, remaining:4980}
  ]
  displayedColumns=['product', 'soldCount', 'remainingStock'];
}
