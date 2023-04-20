import { FiltroPedidosComponent } from './components/filtro-pedidos/filtro-pedidos.component';
import { ListaPedidoService } from './services/tabela-lista-service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaListaPedidosComponent } from './components/tabela-lista-pedidos/tabela-lista-pedidos.component';
import { ButtonModule } from 'primeng/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    TabelaListaPedidosComponent,
    FiltroPedidosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    TabelaListaPedidosComponent,
    FiltroPedidosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ ListaPedidoService ]
})
export class SharedModule { }
