import { NgModule } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { HiddenSearchComponent } from './hidden-search/hidden-search.component';
import { HomeComponent } from './home/home.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';


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
