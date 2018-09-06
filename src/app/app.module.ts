import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodsComponent } from './foods.component';
import { FoodsService } from './foods.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
