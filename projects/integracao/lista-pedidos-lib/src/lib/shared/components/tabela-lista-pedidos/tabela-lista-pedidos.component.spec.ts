import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListaPedidosComponent } from './tabela-lista-pedidos.component';

describe('TabelaListaPedidosComponent', () => {
  let component: TabelaListaPedidosComponent;
  let fixture: ComponentFixture<TabelaListaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaListaPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaListaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
