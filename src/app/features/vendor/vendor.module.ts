import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';

import { AgGridModule } from 'ag-grid-angular';

import { AddEditComponent } from './add-edit/add-edit.component';
import { VendorService } from './vendor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VendorListComponent, AddEditComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.forRoot([])
  ],
  providers: [VendorService],

  bootstrap: [VendorListComponent]

})
export class VendorModule { }
