import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PodstawyModule} from './podstawy/podstawy.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      PodstawyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
