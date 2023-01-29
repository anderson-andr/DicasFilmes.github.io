import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatMenuModule} from '@angular/material/menu'



@NgModule({
  declarations: [
    ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatMenuModule
  ],
  exports:[
    ErrorDialogComponent

  ]


})
export class SharedModule { }
