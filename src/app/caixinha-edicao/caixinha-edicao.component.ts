import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixinha-edicao',
  templateUrl: './caixinha-edicao.component.html',
  styleUrls: ['./caixinha-edicao.component.css']
})
export class CaixinhaEdicaoComponent implements OnInit {
  @Input() nomeProduto: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
