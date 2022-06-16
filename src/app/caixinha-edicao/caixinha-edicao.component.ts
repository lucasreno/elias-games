import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../interface/produto';

@Component({
  selector: 'app-caixinha-edicao',
  templateUrl: './caixinha-edicao.component.html',
  styleUrls: ['./caixinha-edicao.component.css']
})
export class CaixinhaEdicaoComponent implements OnInit {
  @Input() prod: Produto = {
    idProduto: 0,
    idCategoria: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: ''
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  excluirProduto(idProduto: number){
    const url = "http://lucasreno.kinghost.net/loja/produto/" + idProduto;
    this.http.delete(url).subscribe();
  }

}
