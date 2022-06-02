import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interface/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  categorias: Categoria[] = [];

  constructor(private http: HttpClient) {
    const url = "http://lucasreno.kinghost.net/loja/home";
    http.get<Categoria[]>(url).subscribe(
      resposta => {
        this.categorias = resposta;
      }
    );
  }

  ngOnInit(): void {
  }

}
