import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddToCartPage } from '../add-to-cart/add-to-cart.page';
import { CartService } from '../services/cart/cart.service';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // FOR THE SLIDESHOW
  options = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  };

  bannerImages: any = [];
  products: any = []; // just an empty array

  constructor(public productService : ProductsService,
              public routerOutlet : IonRouterOutlet,
              public modalCtrl : ModalController,
              public cart : CartService,
              private router: Router) {
                this.bannerImages = this.productService.bannerImages;
                this.products = this.productService.products;
  }

  async addToCartModal(item) {
    console.log('item_id :>> ', item); // just to check what item is added
    let isAdded = this.cart.isAddedToCart(item.id);

    if(!isAdded) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: AddToCartPage,
        // cssClass: 'add-to-cart-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present(); // to show pop up

    } else {
      this.router.navigate(['']); // maybe redirect to cart?
    }
    
  }

  toFilter(){
    this.router.navigate(['/u-filter']);
  }

     
}