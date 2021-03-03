import { Component, OnInit } from '@angular/core';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hidden-search',
  templateUrl: './hidden-search.component.html',
  styleUrls: ['./hidden-search.component.scss']
})
export class HiddenSearchComponent implements OnInit {

  faSearch = faSearch;
  searching: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
