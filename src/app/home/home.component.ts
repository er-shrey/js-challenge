import { Component, OnInit } from '@angular/core';
import { challenge } from '../global/modules/interfaces.module';
import { MainService } from '../global/services/main.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkList: challenge[] = [];

  constructor(
    private _mainservice: MainService
  ) { }

  ngOnInit(): void {
    this.linkList = this._mainservice.challenges;
  }

}
