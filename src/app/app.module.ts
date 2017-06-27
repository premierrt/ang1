import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GuiRestModule} from 'app/gui-rest/gui-rest.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      GuiRestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
