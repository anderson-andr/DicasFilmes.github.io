import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes/filmes.component';


@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class FilmesModule { }
