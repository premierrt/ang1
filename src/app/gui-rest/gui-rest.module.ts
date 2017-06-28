import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitodosComponent } from './guitodos/guitodos.component';
import {RestapiModule} from '../restapi/restapi.module';
import {RestserviceService} from 'app/restapi/restservice.service';


@NgModule({
  imports: [
    CommonModule,
      RestapiModule
    
  ],
  declarations: [GuitodosComponent],
  exports: [GuitodosComponent]
  ,
  providers: [RestserviceService]
})
export class GuiRestModule { }
