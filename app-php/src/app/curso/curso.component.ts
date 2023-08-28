import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{


  //Vetor de cursos
  vetor!:Curso[];

  //Objeto da classe curso
  curso = new Curso();

  //Construtor 
  constructor(private curso_service:CursoService){}

  

  //Inicializador
  ngOnInit(){
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }


  //Cadastro
  cadastro(){
  }

  //Seleção
  selecao(){
    this.curso_service.obterCursos().subscribe(
      (res: Curso[]) =>{
        this.vetor = res;
      }
    );
  }

  //Alterar
  alterar(){
  }
  //Excluir
  excluir(){
  }
}
