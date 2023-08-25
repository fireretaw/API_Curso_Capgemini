import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Curso } from './curso';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  //URL
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor!:Curso[];

  //Construtor 
  constructor(private http:HttpClient){}

  //Inicializador
  ngOnInit(){

  }


  //Cadastro
  cadastro(){
  }

  //Seleção
  selecao():void{
    alert("Seleção")
  }

  //Alterar
  alterar():void{
    alert("Alterar")
  }
  //Excluir
  excluir():void{
    alert("Excluir")
  }
}
