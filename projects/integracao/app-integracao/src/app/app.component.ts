import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from './../../../lista-pedidos-lib/src/lib/shared/models/nav-itens';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@integracao/app-integracao';

  menu: NavItem [] = [
    {
      displayName: 'Clientes',
      iconName: 'people',
      route: 'escritorio',
    },        
    {
      displayName: 'Pedidos',
      iconName: 'card_giftcard',
      route: 'entradasGADE',
    },
    {
      displayName: 'Relatórios',
      iconName: 'description',          
      children: [
        {
          displayName: 'Pedidos',
          iconName: 'description',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Clientes',
          iconName: 'description',
          route: '/todos'
        },
        { 
          displayName: 'Vendas Por Mês',
          iconName: 'description',
          route: '/todos'
        },
        { 
          displayName: 'Material Consumido No Mês',
          iconName: 'description',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Configurações',
      iconName: 'group',
      children: [
          {
            displayName: 'Colunas',
            iconName: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
}
