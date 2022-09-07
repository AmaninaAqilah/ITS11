import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public cart : CartService,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cart.unseen = 0;
    this.cart.getCartTotalQty();
    this.cart.totalPrice();
  }

  placeOrder() {
    this.router.navigate(['']); // redirect to payment tab
  }

}
