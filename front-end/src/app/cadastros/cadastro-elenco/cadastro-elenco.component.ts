import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';


import { Elenco } from '../../elenco/elenco';
import { CadastrosService } from '../services/cadastros.service';
import { ElencoService } from '../services/elenco/elenco.service';

@Component({
  selector: 'app-cadastro-elenco',
  templateUrl: './cadastro-elenco.component.html',
  styleUrls: ['./cadastro-elenco.component.scss']
})
export class CadastroElencoComponent {
  elenco$: Observable <Elenco[]>;
  displayedColumns = ['nome_ator', 'foto_ator','descricao','actions'];
  elencos: Elenco[] = []
  constructor(private elencoService  : ElencoService,
    public dialog:MatDialog,
    private router: Router,
    private route : ActivatedRoute,

    ) {


    this.elenco$ = this.elencoService.list().pipe (
      catchError (error => {
          return  of([])
      })
    );
  }


  onErro( errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg
    });
  }
  onAdd() {
    this.router.navigate(['novo'], {relativeTo:this.route});
  }

  onEdit(elenco:Elenco) {
    this.router.navigate(['Editar/Ator',elenco.id_ator], {relativeTo:this.route});
  }


  refresh() {
    this.elenco$ = this.elencoService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  onDelete(elenco: Elenco) {
      this.elencoService.delete(elenco).subscribe(() => {
        this.elencos = this.elencos.filter( response => response !==elenco)
        alert("Ator(a) deletado");
        this.refresh();
      })
  }






  }

