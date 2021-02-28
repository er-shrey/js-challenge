import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { FloatingBackBtnComponent } from './global/components/floating-back-btn/floating-back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpandingCardsComponent,
    FloatingBackBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
