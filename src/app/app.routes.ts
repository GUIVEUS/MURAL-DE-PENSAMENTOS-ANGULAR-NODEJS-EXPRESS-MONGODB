import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from '../app/components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'listarPensamento',
        pathMatch:'full'
    },
    {
        path:'criarPensamento',
        component: CriarPensamentoComponent
    },

    {
        path:'listarPensamento',
        component: ListarPensamentoComponent
    },
    {
        path:'excluirPensamento/:id',
        component: ExcluirPensamentoComponent
        
    },

    {
        path: 'editarPensamentos/:id',
        component: EditarPensamentoComponent
      }
];

