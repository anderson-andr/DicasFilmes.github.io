import { Component } from '@angular/core';
import { Elenco } from '../../elenco/elenco';
import { ElencoService } from '../services/elenco/elenco.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-elenco-form',
  templateUrl: './cadastro-elenco-form.component.html',
  styleUrls: ['./cadastro-elenco-form.component.scss']
})
export class CadastroElencoFormComponent {

  form: FormGroup;


  constructor(
    private    formBuilder:FormBuilder,
    private eleconService:ElencoService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute) {
      this.form = this.formBuilder.group( {
        nome_ator   :[null],
        foto_ator   :[null],
        descricao   :[null],
        id_filme     :localStorage.getItem('filme')
      });

  }

  ngOnInit(): void {
  }
  onSubmit (){
    this.eleconService.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError());


 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Ator(a) salvo com sucesso!','',{duration:5000});
  this.onCancel();
 }
 private onError () {
  this.snackBar.open('Erro ao salvar Ator(a)','',{duration:5000});
 }
}
