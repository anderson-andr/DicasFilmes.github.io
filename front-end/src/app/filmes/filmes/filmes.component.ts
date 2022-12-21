import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { json } from 'stream/consumers';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Filme } from '../model/filme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {
  filmes$: Observable <Filme[]>;
  displayedColumns = ['nome_filme', "foto_capa"];
  Filme: Filme[] = []

  constructor(private  filmesService : FilmesService,
    public dialog:MatDialog,
    private router: Router,
    private route : ActivatedRoute,

    ) {
    //this.coursesService = new CoursesService();

    this.filmes$ = this.filmesService.list().pipe (
      catchError (error => {
        console.log("aqui")
         this.onErro('Erro ao carregar. ')
          return  of([])})

    );
  }
   onErro( errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg
    });
  }

  ngOnInit(): void {
    this.filmesService.loadById().subscribe(res => {
        this.Filme = res
        console.log(this.Filme)


    })


  }

}
