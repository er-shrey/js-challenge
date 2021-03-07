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
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';
import { SplitLandingPageComponent } from './split-landing-page/split-landing-page.component';
import { FormWaveAnimationComponent } from './form-wave-animation/form-wave-animation.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { EventKeyCodesComponent } from './event-key-codes/event-key-codes.component';
import { FaqCollapseComponent } from './faq-challenge/faq-challenge.component';
import { RandomChoicepickerComponent } from './random-choicepicker/random-choicepicker.component';
import { AnimatedNavigationComponent } from './animated-animation/animated-animation.component';
import { IncrementingCounterComponent } from './incrementing-counter/incrementing-counter.component';
import { DrinkWaterComponent } from './drink-water/drink-water.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import { ThemeClockComponent } from './theme-clock/theme-clock.component';
import { ButtonRippleEffectComponent } from './button-ripple-effect/button-ripple-effect.component';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { DrawingAppComponent } from './drawing-app/drawing-app.component';
import { KineticLoaderComponent } from './kinetic-loader/kinetic-loader.component';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder.component';
import { StickyNavbarComponent } from './sticky-navbar/sticky-navbar.component';
import { DoubleVerticalSliderComponent } from './double-vertical-slider/double-vertical-slider.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { GithubProfilesComponent } from './github-profiles/github-profiles.component';
import { DoubleHeartClickComponent } from './double-heart-click/double-heart-click.component';
import { AutoTextEffectComponent } from './auto-text-effect/auto-text-effect.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { FastCheckboxesComponent } from './fast-checkboxes/fast-checkboxes.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { AnimatedCountdownComponent } from './animated-countdown/animated-countdown.component';
import { ImageCarouselComponent } from './image-crousal/image-crousal.component';
import { HoverboardComponent } from './hoverboard/hoverboard.component';
import { PokedexComponent } from './pakedex/pakedex.component';
import { MobileTabNavigationComponent } from './mobile-tab-navigation/mobile-tab-navigation.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { DimensionalBoxesComponent } from './dimensional-boxes/dimensional-boxes.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { LiveUserFilterComponent } from './user-filter/user-filter.component';
import { FeedbackDesignComponent } from './feedback-design/feedback-design.component';
import { CustomRangeSliderComponent } from './custom-range-slider/custom-range-slider.component';
import { NetflixNavigationComponent } from './netflix-navigation/netflix-navigation.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';
import { TestimonialBoxComponent } from './testimonial-box/testimonial-box.component';
import { RandomImageFeedComponent } from './random-image-feed/random-image-feed.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InsectCatchGameComponent } from './insert-catch-game/insert-catch-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpandingCardsComponent,
    FloatingBackBtnComponent,
    ProgressStepsComponent,
    RotatingNavigationComponent,
    HiddenSearchComponent,
    BlurBackgroundComponent,
    ScrollAnimationComponent,
    SplitLandingPageComponent,
    FormWaveAnimationComponent,
    SoundBoardComponent,
    DadJokesComponent,
    EventKeyCodesComponent,
    FaqCollapseComponent,
    RandomChoicepickerComponent,
    AnimatedNavigationComponent,
    IncrementingCounterComponent,
    DrinkWaterComponent,
    MovieAppComponent,
    BackgroundSliderComponent,
    ThemeClockComponent,
    ButtonRippleEffectComponent,
    DragNDropComponent,
    DrawingAppComponent,
    KineticLoaderComponent,
    ContentPlaceholderComponent,
    StickyNavbarComponent,
    DoubleVerticalSliderComponent,
    ToastNotificationComponent,
    GithubProfilesComponent,
    DoubleHeartClickComponent,
    AutoTextEffectComponent,
    PasswordGeneratorComponent,
    FastCheckboxesComponent,
    NotesAppComponent,
    AnimatedCountdownComponent,
    ImageCarouselComponent,
    HoverboardComponent,
    PokedexComponent,
    MobileTabNavigationComponent,
    PasswordStrengthComponent,
    DimensionalBoxesComponent,
    VerifyAccountComponent,
    LiveUserFilterComponent,
    FeedbackDesignComponent,
    CustomRangeSliderComponent,
    NetflixNavigationComponent,
    QuizzAppComponent,
    TestimonialBoxComponent,
    RandomImageFeedComponent,
    TodoListComponent,
    InsectCatchGameComponent
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
