import { Component, OnInit } from '@angular/core';
import {
  faTimes,
  faBars,
  faHome,
  faUserAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'rotating-navigation',
  templateUrl: './rotating-navigation.component.html',
  styleUrls: ['./rotating-navigation.component.scss']
})
export class RotatingNavigationComponent implements OnInit {

  faTimes = faTimes;
  faBars = faBars;
  faHome = faHome;
  faUserAlt = faUserAlt;
  faEnvelope = faEnvelope;

  showNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
