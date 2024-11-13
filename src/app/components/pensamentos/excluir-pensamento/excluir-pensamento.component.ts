
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterModule, FormsModule],
  providers:[PensamentoService],
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    
    _id:'',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId((id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
      this.service.excluirPensamento(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])      })
    
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
