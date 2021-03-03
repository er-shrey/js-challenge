import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkList = [
    {
      "link":"/expanding-cards",
      "title":"Day 1: Expanding Cards"
    },
    {
      "link":"/progress-steps",
      "title":"Day 2: Progress Steps"
    },
    {
      "link":"/rotating-navigation",
      "title":"Day 3: Rotating Navigation"
    },
    {
      "link":"/hidden-search",
      "title":"Day 4: Hidden Search"
    },
    {
      "link":"/blur-background",
      "title":"Day 5: Blur Background"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
