import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  public product: Product;

  constructor( private homeService: HomeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const productId: string = this.route.snapshot.paramMap.get('id');

    this.homeService.getProdDetail(productId).subscribe(product => {
      this.product = product;
    })
  }

}
