import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
categories: Array<any> = [
  {
    imageUrl: "assets/apparel.jpg",
    itemName: "Apparel"
  },
  {
    imageUrl: "assets/pants.jpg",
    itemName: "Pants"
  },
  {
    imageUrl: "assets/bags.jpg",
    itemName: "Bags"
  },
  {
    imageUrl: "assets/accessories.jpg",
    itemName: "Accessories"
  }
  

]
  constructor() { }

  ngOnInit() {
  }

}
