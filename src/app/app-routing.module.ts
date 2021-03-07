import { NgModule } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { AnimatedNavigationComponent } from './animated-animation/animated-animation.component';
import { AnimatedCountdownComponent } from './animated-countdown/animated-countdown.component';
import { AutoTextEffectComponent } from './auto-text-effect/auto-text-effect.component';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { ButtonRippleEffectComponent } from './button-ripple-effect/button-ripple-effect.component';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder.component';
import { CustomRangeSliderComponent } from './custom-range-slider/custom-range-slider.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { DimensionalBoxesComponent } from './dimensional-boxes/dimensional-boxes.component';
import { DoubleHeartClickComponent } from './double-heart-click/double-heart-click.component';
import { DoubleVerticalSliderComponent } from './double-vertical-slider/double-vertical-slider.component';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { DrawingAppComponent } from './drawing-app/drawing-app.component';
import { DrinkWaterComponent } from './drink-water/drink-water.component';
import { EventKeyCodesComponent } from './event-key-codes/event-key-codes.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { FaqCollapseComponent } from './faq-challenge/faq-challenge.component';
import { FastCheckboxesComponent } from './fast-checkboxes/fast-checkboxes.component';
import { FeedbackDesignComponent } from './feedback-design/feedback-design.component';
import { FormWaveAnimationComponent } from './form-wave-animation/form-wave-animation.component';
import { GithubProfilesComponent } from './github-profiles/github-profiles.component';
import { HiddenSearchComponent } from './hidden-search/hidden-search.component';
import { HomeComponent } from './home/home.component';
import { HoverboardComponent } from './hoverboard/hoverboard.component';
import { ImageCarouselComponent } from './image-crousal/image-crousal.component';
import { IncrementingCounterComponent } from './incrementing-counter/incrementing-counter.component';
import { InsectCatchGameComponent } from './insert-catch-game/insert-catch-game.component';
import { KineticLoaderComponent } from './kinetic-loader/kinetic-loader.component';
import { MobileTabNavigationComponent } from './mobile-tab-navigation/mobile-tab-navigation.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { NetflixNavigationComponent } from './netflix-navigation/netflix-navigation.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { PokedexComponent } from './pakedex/pakedex.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { QuizzAppComponent } from './quizz-app/quizz-app.component';
import { RandomChoicepickerComponent } from './random-choicepicker/random-choicepicker.component';
import { RandomImageFeedComponent } from './random-image-feed/random-image-feed.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { SplitLandingPageComponent } from './split-landing-page/split-landing-page.component';
import { StickyNavbarComponent } from './sticky-navbar/sticky-navbar.component';
import { TestimonialBoxComponent } from './testimonial-box/testimonial-box.component';
import { ThemeClockComponent } from './theme-clock/theme-clock.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LiveUserFilterComponent } from './user-filter/user-filter.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'expanding-cards',
    component: ExpandingCardsComponent
  },
  {
    path: 'progress-steps',
    component: ProgressStepsComponent
  },
  {
    path: 'rotating-navigation',
    component: RotatingNavigationComponent
  },
  {
    path: 'hidden-search',
    component: HiddenSearchComponent
  },
  {
    path: 'blur-background',
    component: BlurBackgroundComponent
  },
  {
    path: 'scroll-animation',
    component: ScrollAnimationComponent
  },
  {
    path: 'split-landing-page"',
    component: SplitLandingPageComponent
  },
  {
    path: 'form-wave-animation',
    component: FormWaveAnimationComponent
  },
  {
    path: 'sound-board',
    component: SoundBoardComponent
  },
  {
    path: 'dad-jokes',
    component: DadJokesComponent
  },
  {
    path: 'event-key-codes',
    component: EventKeyCodesComponent
  },
  {
    path: 'faq-collapse',
    component: FaqCollapseComponent
  },
  {
    path: 'random-choice-picker',
    component: RandomChoicepickerComponent
  },
  {
    path: 'animated-navigation',
    component: AnimatedNavigationComponent
  },
  {
    path: 'incrementing-counter',
    component: IncrementingCounterComponent
  },
  {
    path: 'drink-water',
    component: DrinkWaterComponent
  },
  {
    path: 'movie-app',
    component: MovieAppComponent
  },
  {
    path: 'background-slider',
    component: BackgroundSliderComponent
  },
  {
    path: 'theme-clock',
    component: ThemeClockComponent
  },
  {
    path: 'button-ripple-effect',
    component: ButtonRippleEffectComponent
  },
  {
    path: 'drag-n-drop',
    component: DragNDropComponent
  },
  {
    path: 'drawing-app',
    component: DrawingAppComponent
  },
  {
    path: 'kinetic-loader',
    component: KineticLoaderComponent
  },
  {
    path: 'content-placeholder',
    component: ContentPlaceholderComponent
  },
  {
    path: 'sticky-navbar',
    component: StickyNavbarComponent
  },
  {
    path: 'double-vertical-slider',
    component: DoubleVerticalSliderComponent
  },
  {
    path: 'toast-notification',
    component: ToastNotificationComponent
  },
  {
    path: 'github-profiles',
    component: GithubProfilesComponent
  },
  {
    path: 'double-herat-click',
    component: DoubleHeartClickComponent
  },
  {
    path: 'auto-text-effect',
    component: AutoTextEffectComponent
  },
  {
    path: 'password-generator',
    component: PasswordGeneratorComponent
  },
  {
    path: 'fast-checkboxes',
    component: FastCheckboxesComponent
  },
  {
    path: 'notes-app',
    component: NotesAppComponent
  },
  {
    path: 'animated-countdown',
    component: AnimatedCountdownComponent
  },
  {
    path: 'image-carousel',
    component: ImageCarouselComponent
  },
  {
    path: 'hoverboard',
    component: HoverboardComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'mobile-tab-navigation',
    component: MobileTabNavigationComponent
  },
  {
    path: 'password-strength',
    component: PasswordStrengthComponent
  },
  {
    path: 'dimensional-boxes',
    component: DimensionalBoxesComponent
  },
  {
    path: 'verify-account',
    component: VerifyAccountComponent
  },
  {
    path: 'live-user-filter',
    component: LiveUserFilterComponent
  },
  {
    path: 'feedback-design',
    component: FeedbackDesignComponent
  },
  {
    path: 'custom-range-slider',
    component: CustomRangeSliderComponent
  },
  {
    path: 'netflix=navigation',
    component: NetflixNavigationComponent
  },
  {
    path: 'quiz-app',
    component: QuizzAppComponent
  },
  {
    path: 'testimonial-box',
    component: TestimonialBoxComponent
  },
  {
    path: 'random-image-feed',
    component: RandomImageFeedComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'insect-catch-game',
    component: InsectCatchGameComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private titleService: Title,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        let pageName = val.url.split('/')[1] ? val.url.split('/')[1] : 'home';
        let title = "JS Challenge: " + pageName;
        this.titleService.setTitle(title);
      }
    });
  }
}
