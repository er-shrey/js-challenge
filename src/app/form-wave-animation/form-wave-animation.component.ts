import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'form-wave-animation',
  templateUrl: './form-wave-animation.component.html',
  styleUrls: ['./form-wave-animation.component.scss']
})
export class FormWaveAnimationComponent implements AfterContentInit {

  constructor() { }

  ngAfterContentInit(): void {
    const labels  = document.querySelectorAll('.form-control label');

    labels.forEach(label => {
      label.innerHTML = label.innerHTML.split('')
                        .map((letter, index) => {
                          return `<span style="transition-delay:${index * 50}ms">${letter}</span>`
                        }).join('');
    });
  }

}
