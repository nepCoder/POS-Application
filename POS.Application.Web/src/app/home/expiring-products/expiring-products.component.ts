import { Component } from '@angular/core';

@Component({
  selector: 'app-expiring-products',
  templateUrl: './expiring-products.component.html',
  styleUrls: ['./expiring-products.component.css']
})
export class ExpiringProductsComponent {
  expiringProducts=[
    {product:'Wai-Wai', expiringOn:'Wednesday', expiryDate:'2023-01-05'},
    {product:'Mario Biscuits', expiringOn:'Monday', expiryDate:2023-1-3}
  ]
  displayedColumns=['product', 'expiringOn', 'expiryDate'];
}
