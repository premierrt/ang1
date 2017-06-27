import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestserviceService } from './restservice.service';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
      HttpModule
  ],
  declarations: [],
  providers: [RestserviceService]
  })
export class RestapiModule { }
