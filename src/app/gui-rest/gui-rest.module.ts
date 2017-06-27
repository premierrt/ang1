import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitodosComponent } from './guitodos/guitodos.component';
import {RestapiModule} from '../restapi/restapi.module';


@NgModule({
  imports: [
    CommonModule,
      RestapiModule
    
  ],
  declarations: [GuitodosComponent],
  exports: [GuitodosComponent]
})
export class GuiRestModule { }
