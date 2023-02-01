import { Component } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent {
  topProducts=[
    {product:'Soda', soldCount:745, remaining:1238},
    {product:'Chhips', soldCount:745, remaining:1238},
    {product:'Beer', soldCount:745, remaining:1238},
    {product:'Eggs', soldCount:745, remaining:1238}
  ]
  displayedColumns=['product', 'soldCount', 'remainingStock'];

}
