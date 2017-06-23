import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicComponent],
  exports: [BasicComponent]
})
export class PodstawyModule { }
