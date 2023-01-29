import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError,  Observable, of } from 'rxjs';

import { Filme } from '../../filmes/model/filme';
import { CadastrosService } from '../services/cadastros.service';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent {

  filmes$: Observable <Filme[]>;
  displayedColumns = ['nome_filme', 'foto_capa','descricacao','actions'];
  filmes: Filme[] = []
  constructor(private cadastroFilmes  : CadastrosService,
    public dialog:MatDialog,
    private router: Router,
    private route : ActivatedRoute,

    ) {


    this.filmes$ = this.cadastroFilmes.list().pipe (

      catchError (error => {
         this.onErro('Erro ao carregar. ')
          return  of([])
      })
    );
  }


  onErro( errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo:this.route});
  }



  onEdit(filme:Filme) {
    this.router.navigate(['editar',filme.id_filme], {relativeTo:this.route});
  }


  refresh() {
    this.filmes$ = this.cadastroFilmes.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  onDelete(filme: Filme) {
      this.cadastroFilmes.delete(filme).subscribe(() => {
        this.filmes = this.filmes.filter( response => response !==filme)
        alert("Serviço Deletado");
        this.refresh();
      })
  }


  onElenco(filme:Filme) {
    this.router.navigate(['elenco'], {relativeTo:this.route});
    let id_filme :any = filme.id_filme
    localStorage.setItem('filme',id_filme)
    console.log(localStorage.getItem('filme'))

  }

}
