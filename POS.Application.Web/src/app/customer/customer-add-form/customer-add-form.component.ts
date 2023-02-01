import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {CustomerService} from '../customer.service'

@Component({
  selector: 'app-customer-add-form',
  templateUrl: './customer-add-form.component.html',
  styleUrls: ['./customer-add-form.component.css']
})
export class CustomerAddFormComponent{
  constructor(
    public dialogRef: MatDialogRef<CustomerAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomerService,
    private _snackBar:MatSnackBar
  ) {}

  formObject =
  {customerId: 65, firstName: 'adsa',middleName:'', lastName: '`lsdh', address: 'saldkhj', phone: '8798'};

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    this.formObject=this.data;
  }



  onFormSubmit(){
    this.customerService.addCustomer(this.data).subscribe(res=>{

      this.dialogRef.close(res);
      this._snackBar.open("Customer: '" + this.data.product + "' is Added!", 'Dismiss');
    });

  }
}
