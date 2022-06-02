import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CaixinhaEdicaoComponent } from './caixinha-edicao/caixinha-edicao.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProdutoComponent,
    CatalogoComponent,
    AddProdutoComponent,
    CaixinhaComponent,
    CaixinhaEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
