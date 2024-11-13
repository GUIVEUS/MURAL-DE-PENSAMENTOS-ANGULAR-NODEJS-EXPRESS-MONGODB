import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  criarPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  // Método para criar um novo pensamento
  addPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>('http://localhost:3000/criarPensamentos', pensamento);
  }

  // Método para atualizar um pensamento
   editarPensamento(pensamento: Pensamento): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/editarPensamentos/${pensamento._id}`, pensamento);
  }


  // Método para deletar um pensamento
  excluirPensamento(pensamento: Pensamento): Observable<any> {
    const id = pensamento._id;
    // Verifique se o id está presente antes de fazer a requisição
    if (!id) {
      throw new Error('ID do pensamento não encontrado');
    }
  
    return this.http.delete<Pensamento>(
      `http://localhost:3000/excluirPensamento/${id}`
    );
  }


  buscarPorId(_id: string): Observable<Pensamento> {
    const url = `${this.API}/${_id}`
    return this.http.get<Pensamento>(url)
  }

}