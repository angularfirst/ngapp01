import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { EngineService } from "./engine.service";

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
