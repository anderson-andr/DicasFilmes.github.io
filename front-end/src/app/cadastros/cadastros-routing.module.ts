import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroElencoFormComponent } from './cadastro-elenco-form/cadastro-elenco-form.component';
import { CadastroElencoComponent } from './cadastro-elenco/cadastro-elenco.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastrosResolver } from './guards/cadastros.resolver';
import { ElencoResolver } from './guards/elenco/elenco.resolver';

const routes: Routes = [


  {path:'',component:CadastroFilmesComponent},
  {path:'novo',  component:CadastroFormComponent},
  {path:'editar/:id',  component:CadastroFormComponent, resolve:{filme:CadastrosResolver}},

  {path:'elenco',  component:CadastroElencoComponent},
  {path:'elenco/novo',  component:CadastroElencoFormComponent},
  {path:'elenco/editar/:id',  component:CadastroElencoFormComponent,resolve:{elenco:ElencoResolver}}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
