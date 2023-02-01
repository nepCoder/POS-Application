import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomerAddFormComponent } from './customer-add-form/customer-add-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CustomerEditFormComponent } from './customer-edit-form/customer-edit-form.component';
import { CustomerDelFormComponent } from './customer-del-form/customer-del-form.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [CustomerComponent, CustomerAddFormComponent, CustomerEditFormComponent, CustomerDelFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
})
export class CustomerModule { }
