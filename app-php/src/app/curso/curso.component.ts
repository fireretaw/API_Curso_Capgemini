import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Vetor de cursos
  vetor: Curso[] = [];
  //Objeto da classe curso
  curso = new Curso();

  //Construtor 
  constructor(private curso_servico: CursoService) { }



  //Inicializador
  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }


  //Cadastro
  cadastro(curso:Curso) {

    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        //limpar atributos
        this.curso.valorCurso = null;
        this.curso.nomeCurso = null;

      }
    )
  }

  //Seleção
  selecao() {
    this.curso_servico.obterCurso().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )

  }

  //Excluir
  excluir(curso:Curso) {

    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        //limpar atributos
        this.curso.valorCurso = null;
        this.curso.nomeCurso = null;
      }
    )
  }

  //selecionar Curso Específico

  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.valorCurso = c.valorCurso;
    this.curso.nomeCurso = c.nomeCurso;

  }


  
  //alterar
  alterar() {

    this.curso_servico.alterarCurso(this.curso).subscribe(
      (res) => {
        this.vetor = res;
        
        //limpar atributos
        this.curso.valorCurso = null;
        this.curso.nomeCurso = null;
      }
    )
  }
}

