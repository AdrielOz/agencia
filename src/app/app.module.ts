import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';


@NgModule({
  declarations: [
    AppComponent,
    Index2Component,
    Index3Component,
    Index4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
