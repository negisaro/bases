import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/components/heroes.module';
import { CounterModule } from './counter/counter.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})

export class AppModule {}
