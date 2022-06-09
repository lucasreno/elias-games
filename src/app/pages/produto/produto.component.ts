import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: Produto = {
    idProduto: 0,
    idCategoria: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: ''
  };
  produtos: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient  
  ) { }

  ngOnInit(): void {
    const url = "http://lucasreno.kinghost.net/loja/produto/";
    const urlProdutos = "http://lucasreno.kinghost.net/loja/produtos";

    this.http.get<any>(urlProdutos).subscribe(
      resposta => {
        this.produtos = resposta;
      }
    );

    this.route.params.subscribe(
      params => {
        this.http.get<any>(url+params["id"]).subscribe(
          resposta => {
            this.produto = resposta[0];
          }
        );
      }
    );
  }

}
