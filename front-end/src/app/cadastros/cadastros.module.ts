import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastroElencoComponent } from './cadastro-elenco/cadastro-elenco.component';
import { CadastroElencoFormComponent } from './cadastro-elenco-form/cadastro-elenco-form.component';

@NgModule({
  declarations: [
    CadastroFilmesComponent,
    CadastroFormComponent,
    CadastroElencoComponent,
    CadastroElencoFormComponent,
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class CadastrosModule { }
