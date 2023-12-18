import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero.component';
import { ResultadoModule } from '../resultado/resultado.module';



@NgModule({
  declarations: [TableroComponent],
  imports: [
    CommonModule,
    ResultadoModule
  ],
  exports: [TableroComponent]
})
export class TableroModule { }
