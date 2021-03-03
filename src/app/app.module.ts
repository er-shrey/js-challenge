import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { FloatingBackBtnComponent } from './global/components/floating-back-btn/floating-back-btn.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';
import { HiddenSearchComponent } from './hidden-search/hidden-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpandingCardsComponent,
    FloatingBackBtnComponent,
    ProgressStepsComponent,
    RotatingNavigationComponent,
    HiddenSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
