import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filme } from '../../filmes/model/filme';
import { CadastrosService } from '../services/cadastros.service';


@Injectable({
  providedIn: 'root'
})
export class CadastrosResolver implements Resolve<Filme> {
  constructor (private cadastroService: CadastrosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filme> {
    if(route.params && route.params['id']) {
      return this.cadastroService.loadById(route.params['id']);
    }
    return of ({id_filme:0,nome_filme:'',foto_capa:'',trailer:'',id_usuario:0,descricacao:''});
  }
}
