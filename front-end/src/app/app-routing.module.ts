import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  { path: 'filme',
  loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
