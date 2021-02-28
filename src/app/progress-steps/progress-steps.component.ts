import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss']
})
export class ProgressStepsComponent implements OnInit {

  steps = [
    1,
    2,
    3,
    4
  ];

  currentstep = 1;
  progressWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setpBackward() {
    this.currentstep -= 1;
    this.setProgress();
  }
  
  setpForward() {
    this.currentstep += 1;
    this.setProgress();
  }

  setProgress() {
    this.progressWidth = ((this.currentstep - 1) / (this.steps.length - 1)) * 100;
  }

}
