import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule
  ],
  exports: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListaPedidosLibModule { }
