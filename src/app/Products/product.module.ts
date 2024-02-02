import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PEditComponent } from './p-edit/p-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PEditComponent,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    // PerfectScrollbarModule

  ]
})
export class ProductModule { }
