import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];
  item: any;
  total_price: number = 0;
  total_cart_qty: number = 0;
  unseen: number = 0;

  constructor(
    private utility: UtilityService) { }

  placeItem(product) {
    this.item = null;
    this.item = product;
  }

  isAddedToCart(id) {
    return this.items.some(item => item['id'] == id );
  }

  getCartTotalQty() {
    console.log(this.items);
    this.total_cart_qty = 0;

    for (let item of this.items) {
      this.total_cart_qty += item['cartQuantity'];
    }
  }

  addToCart() {
    if (this.item['cartQuantity'] > 0) { 
      this.addLocalCartItems();
    }
  }

  removeItem(index) {
    this.removeLocalCartItem(index);
  }

  removeLocalCartItem(index) {
    this.total_price -= this.calculatePrice(this.items[index]);
    this.items.splice(index, 1);
  }

  addLocalCartItems() {
    this.unseen += 1;
    console.log('add to cart>:', this.items, this.item);
    let index = this.items.length > 0 ? this.items.findIndex(value => value.id === this.item.id) : -1;
   
    if ( index > -1 ) {
      console.log(this.items[index]['cartQuantity'], this.item['cartQuantity']);
      this.items[index]['cartQuantity'] += this.item['cartQuantity'];
    } else {
      this.items.push(this.item);
    } 
  }

  totalPrice() {
    this.total_price = 0;

    for ( let item of this.items ) {
      this.total_price += this.calculatePrice(item);
    }
  }

  calculatePrice(product) {
    let price = product['price'];
    return Number(product['cartQuantity']) * Number(price); 
  }
  
  resetCart() {
    this.items = [];
    this.item = null;
  }
  
}