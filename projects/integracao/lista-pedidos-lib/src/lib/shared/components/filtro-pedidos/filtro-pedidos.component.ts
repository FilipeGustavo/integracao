import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-filtro-pedidos',
  templateUrl: './filtro-pedidos.component.html',
  styleUrls: ['./filtro-pedidos.component.css']
})
export class FiltroPedidosComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
