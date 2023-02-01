import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css']
})
export class ProductEditFormComponent {
  constructor(public dialogRef: MatDialogRef<ProductEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService:ProductService,
    private _snackBar:MatSnackBar){}

  onCloseDialog(){
    this.dialogRef.close();
  }

  onFormSubmit(){
    this.productService.updateProduct(this.data).subscribe(res=>{
      this.dialogRef.close(res);
      this._snackBar.open("Product: '" + this.data.product + "' is Updated!", 'Dismiss');
    })
  }
}
