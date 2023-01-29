import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';
import { Filme } from '../../filmes/model/filme';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  private readonly API = 'http://localhost:3000/api/filme';
  constructor(
    private httpClient: HttpClient,
  ) { }

  list() {
    return this.httpClient
      .get<Filme[]>(this.API )
      .pipe(
        first(),
        tap((filme:any) => console.log(filme))
      );
  }


  save(record: Partial<Filme>) {
    console.log(record);
    if (record.id_filme) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Filme>) {
    return this.httpClient.post<Filme>(this.API, record).pipe(first());
  }
  private update(record: Partial<Filme>) {
    return this.httpClient
      .put<Filme>(`${this.API}/${record.id_filme}`, record)
      .pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Filme>(`${this.API}/${id}`);
  }

  delete(servico: Filme) {
    return this.httpClient.delete<Filme>(this.API + '/' + servico.id_filme);
  }





}
