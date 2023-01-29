import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ElencoService } from '../../services/elenco/elenco.service';
import { Elenco } from '../../../elenco/elenco';

@Injectable({
  providedIn: 'root'
})
export class ElencoResolver implements Resolve<Elenco> {

  constructor (private elencoService: ElencoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Elenco> {
    if(route.params && route.params['id']) {
      return this.elencoService.loadById(route.params['id']);
    }
    return of ({id_ator:0,nome_ator:'',foto_ator:'',id_filme:0,descricao:''});
  }
}
