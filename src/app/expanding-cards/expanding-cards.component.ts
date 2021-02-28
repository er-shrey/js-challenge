import { Component } from '@angular/core';

@Component({
  selector: 'expanding-cards',
  templateUrl: './expanding-cards.component.html',
  styleUrls: ['./expanding-cards.component.scss']
})
export class ExpandingCardsComponent {

  imageList = [
    {
      "image": "autumn.jpg",
      "title": "Autumn"
    },
    {
      "image": "boat_space.jpg",
      "title": "Boat & Space"
    },
    {
      "image": "elephant.jpg",
      "title": "Elephant"
    },
    {
      "image": "fort_way.jpg",
      "title": "Fort Way"
    },
    {
      "image": "kingfisher.jpg",
      "title": "Kingfisher"
    },
    {
      "image": "kodaiknal.jpg",
      "title": "Kodaiknal"
    }
  ];

  selectedImage: string ='autumn.jpg';

}
