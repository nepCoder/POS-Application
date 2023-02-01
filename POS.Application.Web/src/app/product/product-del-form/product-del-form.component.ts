import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-del-form',
  templateUrl: './product-del-form.component.html',
  styleUrls: ['./product-del-form.component.css']
})
export class ProductDelFormComponent {
  constructor(public dialogRef: MatDialogRef<ProductDelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService:ProductService,
    private _snackBar: MatSnackBar){}

  onCancel(){
    this.dialogRef.close();
  }

  onDelete(){
    this.productService.deleteProduct(this.data).subscribe(res=>{
      this.dialogRef.close(res);
      this._snackBar.open("Product: '" + this.data.product + "' is Deleted!", 'Dismiss');
    })
}
}
