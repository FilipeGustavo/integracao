import { ListaPedidoService } from './../../services/tabela-lista-service';
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Pedido } from '../../models/pedidos-model';


export interface PeriodicElement {
  status: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 'orçamento', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', valor: '10,50'},
  {status: 'pendente', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', valor: '10,50'},
  {status: 'frabricacao', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', valor: '10,50'},
  {status: 'pronto', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', valor: '10,50'},
  {status: 'entregue', position: 5, name: 'Boron', weight: 10.811, symbol: 'B', valor: '10,50'},
  {status: 'orçamento', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', valor: '10,50'},
  {status: 'entregue', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', valor: '10,50'},
  {status: 'entregue', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', valor: '10,50'},
  {status: 'orçamento', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', valor: '10,50'},
  {status: 'orçamento', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', valor: '10,50'},
];


@Component({
  selector: 'lib-tabela-lista-pedidos',
  templateUrl: './tabela-lista-pedidos.component.html',
  styleUrls: ['./tabela-lista-pedidos.component.css']
})
export class TabelaListaPedidosComponent implements OnInit {
  displayedColumns: string[] = ['status', 'position', 'name', 'weight', 'symbol', 'valor'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {

  }
}
