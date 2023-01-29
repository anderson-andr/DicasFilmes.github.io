import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home'},
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  { path: 'cadastros',
  loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)
  },
  { path: 'filme/:id',
  loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
