import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-del-form',
  templateUrl: './customer-del-form.component.html',
  styleUrls: ['./customer-del-form.component.css']
})
export class CustomerDelFormComponent {

  constructor(private dialogRef:MatDialogRef<CustomerDelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private customerService: CustomerService,
    private _snackBar:MatSnackBar){}

    onCloseDialog(){
      this.dialogRef.close();
    }

    onFormSubmit(item:any){
      this.customerService.deleteCustomer(item).subscribe(res=>{
        this.dialogRef.close(res)
        this._snackBar.open("Customer: '" + this.data.product + "' is Deleted!", 'Dismiss');
      })
    }
}
