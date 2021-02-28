import { NgModule } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { HomeComponent } from './home/home.component';


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
