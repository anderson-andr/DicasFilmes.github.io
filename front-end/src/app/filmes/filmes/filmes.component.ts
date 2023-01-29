import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Filme } from '../model/filme';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {
  Filme: Filme[] = []
  dangerousVideoUrl: any;
  videoUrl: any;
  constructor(private  filmesService : FilmesService,
    public dialog:MatDialog,
    private router: Router,
    private route : ActivatedRoute,
    private sanitizer: DomSanitizer

    ) {
    //this.coursesService = new CoursesService();


  }
   onErro( errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg
    });
  }
  idFilme: any;
  filme_encontrado:any;
  ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
       this.idFilme = res.get('id')
    });

    this.FilmebyId(this.idFilme);
  }


  FilmebyId(id: string) {
    this.filmesService.loadById(id).subscribe((res) => {
      this.filme_encontrado = res
      this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.filme_encontrado.trailer;
      this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
      console.log(res)
  })

  }

}
