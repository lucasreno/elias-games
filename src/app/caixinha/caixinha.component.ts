import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../interface/produto';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css']
})
export class CaixinhaComponent implements OnInit {
  @Input() prod: Produto = {
    idProduto: 0,
    idCategoria: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
