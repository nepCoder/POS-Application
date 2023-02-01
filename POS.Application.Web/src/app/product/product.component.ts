import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProductAddFormComponent } from './product-add-form/product-add-form.component';
import { ProductDelFormComponent } from './product-del-form/product-del-form.component';
import { ProductEditFormComponent } from './product-edit-form/product-edit-form.component';
import { ProductService } from './product.service';

export interface Product{
  productId: number,
  product: string,
  cost: number,
  expiryDate: Date,
  insertDate: Date,
  userPersonId: number,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productList: any = '';
  clickedRows = new Set<Product>();
  displayedColumns = [
    'productId',
    'product',
    'cost',
    'expiryDate',
    'userPersonId',
    'insertDate',
    'action'
  ];
  dataToUpdate:any;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private router:Router,
    private app:AppComponent
  ) {}

  ngOnInit() {
    this.app.activateNav(this.router.url);
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }

  onAddDialogOpen(): void {
    const addDialogRef = this.dialog.open(ProductAddFormComponent, {
      data: {userPersonId: '5',
      },
    });

    addDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.productList = [...res, ...this.productList];
      }
    });
  }

  onDelDialogOpen(obj:any) {
    const delDialogRef = this.dialog.open(ProductDelFormComponent, {
      data: obj
    });

  delDialogRef.afterClosed().subscribe(res=>{
    if(res){
      this.productList.splice(this.productList.indexOf(res), 1)
      this.productList = this.productList;
    }
  })
  }

  onEditDialogOpen(obj:any){
    const editDialogRef = this.dialog.open(ProductEditFormComponent, {
      data:obj
    });
  }
}
