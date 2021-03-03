import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'blur-background',
  templateUrl: './blur-background.component.html',
  styleUrls: ['./blur-background.component.scss']
})
export class BlurBackgroundComponent implements OnInit, OnDestroy {

  load: number = 0;
  interval: any;
  blur: string = "blur(30px)";

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() =>{
      this.load++;
      this.blur = "blur("+(30 - this.load/3)+"px)";
      if ( this.load > 99) {
        clearInterval(this.interval);
      }
    }, 30);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
