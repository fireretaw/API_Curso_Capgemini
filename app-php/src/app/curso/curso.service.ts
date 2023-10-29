import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/php/";

  //Vetor
  vetor: Curso[] = [];

  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCurso(): Observable<Curso[]> {

    return this.http.get(this.url + 'listar').pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  //Cadastrar cursos
  cadastrarCurso(c: Curso): Observable<Curso[]> {
    return this.http.post(this.url + 'cadastrar', { cursos: c }).pipe(
      map((res) => {
        this.vetor.push(res['cursos']);
        return this.vetor;
      }))
  }

  //remover cursos
  removerCurso(c: Curso): Observable<Curso[]> {

    const params = new HttpParams().set("idCurso", c.idCurso.toString());
    return this.http.delete(this.url + 'excluir', { params: params }).pipe(
      map((res) => {
        const filtro = this.vetor.filter((curso) => {
          return + curso['idCurso'] !== +c.idCurso;
        });

      }));

    return this.vetor = filtro;
  }

  //Atualizar cursos
  alterarCurso(c: Curso): Observable<Curso[]> {
    return this.http.put(this.url + 'alterar', { cursos: c }).pipe(
      map((res) => {
        const cursoAlterado = this.vetor.find((item) => {
          return + item['idCurso'] === +[idCurso];
        });

        if(cursoAlterado){
          cursoAlterado['nomeCurso'] = c['nomeCurso'];
          cursoAlterado['valorCurso'] = c['valorCurso'];
        }

        return this.vetor;
      }))
  }
}
