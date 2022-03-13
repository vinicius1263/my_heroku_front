import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa/pessoa.model';

@Component({
  selector: 'app-pessoa-criar',
  templateUrl: './pessoa-criar.component.html',
  styleUrls: ['./pessoa-criar.component.css']
})
export class PessoaCriarComponent implements OnInit {

  pessoa:Pessoa ={
    id:null,
    nome:"",
    nacimento:"",
    cpf:"",
    email:"",
    telefone:""
  }

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }
  

  cadastrarPessoa(): void {
    this.pessoaService.cadastrar(this.pessoa).subscribe(()=>{
      this.router.navigate(["/pessoa"])
    })

  }

  voltar(){

    this.router.navigate(['/cidades'])
  }
}
