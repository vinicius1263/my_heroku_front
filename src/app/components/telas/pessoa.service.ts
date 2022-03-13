import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Pessoa } from './pessoa/pessoa.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url_base = "https://vini-apirest-pessoas.herokuapp.com"

  constructor(private http: HttpClient) { }

  getPessoa(): Observable<Pessoa>{
    return this.http.get<Pessoa>(this.url_base + '/listar/pessoas');
  }

  cadastrar(pessoa:Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url_base + '/salvar/pessoa', pessoa)

  }

  deletar(id){
    return this.http.delete<string>(this.url_base+"/"+id)
  }
}
