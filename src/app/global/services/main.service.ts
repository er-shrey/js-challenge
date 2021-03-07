import { Injectable } from '@angular/core';
import { challenge } from '../modules/interfaces.module';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  challenges: challenge[] = [
    {
      "link":"/expanding-cards",
      "title":"Day 1: Expanding Cards",
      "active": true
    },
    {
      "link":"/progress-steps",
      "title":"Day 2: Progress Steps",
      "active": true
    },
    {
      "link":"/rotating-navigation",
      "title":"Day 3: Rotating Navigation",
      "active": true
    },
    {
      "link":"/hidden-search",
      "title":"Day 4: Hidden Search",
      "active": true
    },
    {
      "link":"/blur-background",
      "title":"Day 5: Blur Background",
      "active": true
    },
    {
      "link":"/scroll-animation",
      "title":"Day 6: Scroll Animation",
      "active": false
    }
  ];
  
  constructor() { }
}
