import {Component, Injectable, NgModule} from '@angular/core';
import { CustomerAddFormComponent } from './customer-add-form/customer-add-form.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CustomerEditFormComponent } from './customer-edit-form/customer-edit-form.component';
import { CustomerDelFormComponent } from './customer-del-form/customer-del-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`First page`;
  itemsPerPageLabel = $localize`Items per page:`;
  lastPageLabel = $localize`Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page + 1} of ${amountPages}`;
  }
}

export interface Customer {
   customerId: number,
   firstName: string,
   middleName?: string,
   lastName: string,
   address: string,
   phone: string,
   insertPerson:string
 }

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {
   customerData: Customer[] = [];
   displayedColumns = ['id', 'name', 'address', 'phone', 'insertPerson', 'insertDate', 'action']

   constructor(
    public dialog: MatDialog,
    private customerService: CustomerService,
    private router:Router,
    private app:AppComponent,
    private _snackBar : MatSnackBar) {}

   ngOnInit(){
    this.app.activateNav(this.router.url);
    this.getCustomers();
  }

   getCustomers(){
      this.customerService.getCustomer().subscribe(res => {
         this.customerData=res;
      })
   }

   onOpenAddDialog(){
      const dialogRef=this.dialog.open(CustomerAddFormComponent,{
      data:{insertPersonId: '5'}
    })

    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        debugger;
        const resStr = JSON.stringify(res);   
         this.customerData.unshift(res[0]);
         this.customerData = [...this.customerData];
         this._snackBar.open("Customer: '" + res[0].firstName+' '+ res[0].lastName + "' is Added!", 'Dismiss');
      }
    })
  }

  onOpenEditDialog(element:any){ const dialogRef = this.dialog.open(CustomerEditFormComponent, {data:element})
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      debugger
      this._snackBar.open("Customer: '" + res[0].firstName+' '+ res[0].lastName + "' is Updated!", 'Dismiss');
    });
  }

  onOpenDelDialog(element:any){const dialogRef = this.dialog.open(CustomerDelFormComponent, {data:element} )
    dialogRef.afterClosed().subscribe(res=>{
     if(res){
      const index = this.customerData.findIndex(x => x.customerId == res[0].customerId);
      this.customerData.splice(index, 1);
      this.customerData=[...this.customerData];
      this._snackBar.open("Customer: '" + res[0].firstName+' '+ res[0].lastName + "' is Deleted!", 'Dismiss');
     }
    })
}
}






 @NgModule({
   imports: [MatPaginatorModule],
  //  declarations: [MatPaginatorIntl],
   providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
 })
 export class MatPaginatorIntlModule {}
