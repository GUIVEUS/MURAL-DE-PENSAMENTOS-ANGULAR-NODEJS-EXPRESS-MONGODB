import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PensamentoService } from '../pensamento.service';


@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers:[PensamentoService],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {

    _id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}