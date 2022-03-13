import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ InicioComponent} from './components/telas/inicio/inicio.component';
import { PessoaComponent } from './components/telas/pessoa/pessoa.component';
import { PessoaCriarComponent } from './components/telas/pessoa-criar/pessoa-criar.component';


const routes: Routes = [

  {path: "",component :InicioComponent},

  {path: "pessoa",component :PessoaComponent},

  {path: "pessoa-criar",component :PessoaCriarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
