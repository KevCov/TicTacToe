import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './resultado.component';



@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    CommonModule
  ],
  exports: [ResultadoComponent]
})
export class ResultadoModule { }
