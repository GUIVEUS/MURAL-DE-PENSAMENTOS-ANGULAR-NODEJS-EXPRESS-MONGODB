import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { HttpClientModule } from '@angular/common/http';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  templateUrl: './criar-pensamento.component.html',
  providers:[PensamentoService],
  styleUrls: ['./criar-pensamento.component.css'],
  imports: [FormsModule, RouterModule, HttpClientModule]
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.addPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
