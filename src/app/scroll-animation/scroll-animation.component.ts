import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.scss']
})
export class ScrollAnimationComponent implements OnInit {

  boxes = Array(10).fill(1).map((x,i) => i);
  triggerBottom = window.innerHeight / 5 * 4;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) 
  
  scrollHandler(event) {
    this.triggerBottom = window.innerHeight / 5 * 4; 
  }

  showBox(ref: Element) {
    return this.triggerBottom > ref.getBoundingClientRect().top;
  }

}
