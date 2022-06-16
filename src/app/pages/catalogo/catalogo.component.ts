import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  url = "http://lucasreno.kinghost.net/loja/ultimos-produtos";
  produtos: Produto[] = [];
  constructor(private http: HttpClient) {
    this.pegarDados();
  }

  pegarDados(){
    this.http.get<Produto[]>(this.url).subscribe(
      resposta => {
        this.produtos = resposta;
      }
    );
  }

  ngOnInit(): void {
  }

}
