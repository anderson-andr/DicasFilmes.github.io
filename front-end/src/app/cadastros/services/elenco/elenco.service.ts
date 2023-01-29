import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Elenco } from '../../../elenco/elenco';
@Injectable({
  providedIn: 'root'
})
export class ElencoService {


  private readonly API = 'http://localhost:3000/api/ator';
  constructor(
    private httpClient: HttpClient,
  ) { }

  list() {
    const id = localStorage.getItem('filme')
    return this.httpClient
      .get<Elenco[]>(this.API+ '/elenco/'+ id)
      .pipe(
        first(),
        tap((elenco:any) => console.log(elenco))
      );
  }


  save(record: Partial<Elenco>) {
    console.log(record);
    if (record.id_ator) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Elenco>) {
    return this.httpClient.post<Elenco>(this.API, record).pipe(first());
  }
  private update(record: Partial<Elenco>) {
    return this.httpClient
      .put<Elenco>(`${this.API}/${record.id_ator}`, record)
      .pipe(first());
  }
  delete(servico: Elenco) {
    return this.httpClient.delete<Elenco>(this.API + '/' + servico.id_ator);
  }

  loadById(id: string) {
    return this.httpClient.get<Elenco>(`${this.API}/${id}`);
  }

}
