import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsyModule} from './formsy/formsy.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
