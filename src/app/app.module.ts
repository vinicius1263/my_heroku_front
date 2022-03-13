import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { InicioComponent } from './components/telas/inicio/inicio.component';
import { PessoaComponent } from './components/telas/pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoaCriarComponent } from './components/telas/pessoa-criar/pessoa-criar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    PessoaComponent,
    PessoaCriarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
