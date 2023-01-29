import { Location } from '@angular/common';
import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../../filmes/model/filme';
import { CadastrosService } from '../services/cadastros.service';



@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {
  form: FormGroup;


  constructor(
    private    formBuilder: FormBuilder,
    private cadastroFilmes  : CadastrosService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute) {
      this.form = this.formBuilder.group( {
        id_filme:[null],
        nome_filme:[null],
        foto_capa:[null],
        trailer:[null],
        id_usuario:[null],
        descricacao:[null],




      });

  }

  ngOnInit(): void {
    const filme:Filme = this.route.snapshot.data['filme'];
      this.form.setValue ({
        id_filme:filme.id_filme,
        nome_filme:filme.nome_filme,
        foto_capa:filme.foto_capa,
        trailer:filme.trailer,
        id_usuario:filme.id_usuario,
        descricacao:filme.descricacao,



      })
      console.log(filme)

  }



  onSubmit (){
    this.cadastroFilmes.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError());


 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Serviço salvo com sucesso!','',{duration:5000});
  this.onCancel();
 }
 private onError () {
  this.snackBar.open('Erro ao salvar serviço','',{duration:5000});
 }




}
