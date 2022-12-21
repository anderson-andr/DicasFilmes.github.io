import { Component } from '@angular/core';
import { Filme } from '../../filmes/model/filme';
import { FilmesService } from '../../filmes/services/filmes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Filme: Filme[] = [];


  constructor(
    private filmesService: FilmesService,
    private router: Router,
    private route: ActivatedRoute,

    ){}


    ngOnInit(): void {

      this.filmesService.list().subscribe(res => {
          this.Filme = res
          console.log(this.Filme)
        })





      }


      onFilme(id:number){

        this.router.navigate(['/filme'], { relativeTo: this.route });
       localStorage.setItem('id', id.toString());

      }
}
