import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, identity, tap } from 'rxjs';
import { Filme } from '../../../../../src/entity/filme';



@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private readonly API = 'http://localhost:3000/api/filme';


  constructor(
    private httpClient: HttpClient,
  ) {
  }


  list() {

    return this.httpClient
      .get<Filme[]>(this.API )
      .pipe(
        first(),
        tap((filme) => filme)
      );
  }
  loadById() {
    let id = window.localStorage.getItem('id')
    return this.httpClient.get<Filme[]>(this.API + '/' + id)
    .pipe(
      first(),
      tap((filme) => (filme))
    );
  }

}
