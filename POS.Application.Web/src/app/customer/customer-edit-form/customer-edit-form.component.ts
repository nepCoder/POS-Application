import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.css']
})
export class CustomerEditFormComponent {

  constructor(private dialogRef: MatDialogRef<CustomerEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private customerService: CustomerService,
    private _snackBar : MatSnackBar ){}


    onCloseDialog(){
      this.dialogRef.close();
    }


    onFormSubmit(item:any){
      console.log(item);
      debugger;
      this.customerService.updateCustomer(item).subscribe(res=>{
      this.dialogRef.close(res);
    }) }
}
