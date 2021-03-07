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
      "active": true
    },
    {
      "link":"/split-landing-page",
      "title":"Day 7: Split Landing Page",
      "active": false
    },
    {
      "link":"/form-wave-animation",
      "title":"Day 8: Form Wave Animation",
      "active": false
    },
    {
      "link":"/sound-board",
      "title":"Day 9: Sound Board",
      "active": false
    },
    {
      "link":"/dad-jokes",
      "title":"Day 10: Dad Jokes",
      "active": false
    },
    {
      "link":"/event-key-codes",
      "title":"Day 11: Event KeyCodes",
      "active": false
    },
    {
      "link":"/faq-collapse",
      "title":"Day 12: FAQ Collapse",
      "active": false
    },
    {
      "link":"/random-choice-picker",
      "title":"Day 13: Random Choice Picker",
      "active": false
    },
    {
      "link":"/animated-navigation",
      "title":"Day 14: Animated Navigation",
      "active": false
    },
    {
      "link":"/incrementing-counter",
      "title":"Day 15: Incrementing Counter",
      "active": false
    },
    {
      "link":"/drink-water",
      "title":"Day 16: Drink Water",
      "active": false
    },
    {
      "link":"/movie-app",
      "title":"Day 17: Movie App",
      "active": false
    },
    {
      "link":"/background-slider",
      "title":"Day 18: Background Slider",
      "active": false
    },
    {
      "link":"/theme-clock",
      "title":"Day 19: Theme Clock",
      "active": false
    },
    {
      "link":"/button-ripple-effect",
      "title":"Day 20: Button Ripple Effect",
      "active": false
    },
    {
      "link":"/drag-n-drop",
      "title":"Day 21: Drag N Drop",
      "active": false
    },
    {
      "link":"/drawing-app",
      "title":"Day 22: Drawing App",
      "active": false
    },
    {
      "link":"/kinetic-loader",
      "title":"Day 23: Kinetic Loader",
      "active": false
    },
    {
      "link":"/content-placeholder",
      "title":"Day 24: Content Placeholder",
      "active": false
    },
    {
      "link":"/sticky-navbar",
      "title":"Day 25: Sticky Navbar",
      "active": false
    },
    {
      "link":"/double-vertical-slider",
      "title":"Day 26: Double Vertical Slider",
      "active": false
    },
    {
      "link":"/toast-notification",
      "title":"Day 27: Toast Notification",
      "active": false
    },
    {
      "link":"/github-profiles",
      "title":"Day 28: Github Profiles",
      "active": false
    },
    {
      "link":"/double-herat-click",
      "title":"Day 29: Double Heart Click",
      "active": false
    },
    {
      "link":"/auto-text-effect",
      "title":"Day 30: Auto Text Effect",
      "active": false
    },
    {
      "link":"/password-generator",
      "title":"Day 31: Password Generator",
      "active": false
    },
    {
      "link":"/fast-checkboxes",
      "title":"Day 32: Fast Checkboxes",
      "active": false
    },
    {
      "link":"/notes-app",
      "title":"Day 33: Notes App",
      "active": false
    },
    {
      "link":"/animated-countdown",
      "title":"Day 34: Animated Countdown",
      "active": false
    },
    {
      "link":"/image-carousel",
      "title":"Day 35: Image Carousel",
      "active": false
    },
    {
      "link":"/hoverboard",
      "title":"Day 36: Hoverboard",
      "active": false
    },
    {
      "link":"/pokedex",
      "title":"Day 37: Pokedex",
      "active": false
    },
    {
      "link":"/mobile-tab-navigation",
      "title":"Day 38: Mobile Tab Navigation",
      "active": false
    },
    {
      "link":"/password-strength",
      "title":"Day 39: Password Strength",
      "active": false
    },
    {
      "link":"/dimensional-boxes",
      "title":"Day 40: 3D Background Boxes",
      "active": false
    },
    {
      "link":"/verify-account",
      "title":"Day 41: Verify Account UI",
      "active": false
    },
    {
      "link":"/live-user-filter",
      "title":"Day 42: Live User Filter",
      "active": false
    },
    {
      "link":"/feedback-design",
      "title":"Day 43: Feedback UI Design",
      "active": false
    },
    {
      "link":"/custom-range-slider",
      "title":"Day 44: Custom Range Slider",
      "active": false
    },
    {
      "link":"/netflix=navigation",
      "title":"Day 45: Netflix Navigation",
      "active": false
    },
    {
      "link":"/quiz-app",
      "title":"Day 46: Quiz App",
      "active": false
    },
    {
      "link":"/testimonial-box",
      "title":"Day 47: Testimonial Box",
      "active": false
    },
    {
      "link":"/random-image-feed",
      "title":"Day 48: Random Image Feed",
      "active": false
    },
    {
      "link":"/todo-list",
      "title":"Day 49: Todo List",
      "active": false
    },
    {
      "link":"/insect-catch-game",
      "title":"Day 50: Insect Catch Game",
      "active": false
    }
  ];
  
  constructor() { }
}
