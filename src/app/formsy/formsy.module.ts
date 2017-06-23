import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularzComponent } from './formularz/formularz.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormularzComponent],
  exports: [FormularzComponent]
})
export class FormsyModule { }
