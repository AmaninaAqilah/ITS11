import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddToCartPage } from '../add-to-cart/add-to-cart.page';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public prodList: any;

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
  products: any[];
  public listOfproduct: any[];
  public loadedListProduct: any[];

  constructor(private productService : ProductService,
              public routerOutlet : IonRouterOutlet,
              public modalCtrl : ModalController,
              public cart : CartService,
              private auth: AuthService,
              private afs: AngularFirestore,
              private router: Router) {
                this.bannerImages = this.productService.bannerImages;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.afs.collection(`items`).valueChanges().subscribe(listOfproduct=> {
      this.listOfproduct = listOfproduct;
      this.loadedListProduct = listOfproduct;
    });

  }

  async addToCartModal(item) {
    let isAdded = this.cart.isAddedToCart(item.id);

    if(!isAdded) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: AddToCartPage,
        cssClass: 'add-to-cart-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present(); // to show pop up

    } else {
      this.router.navigate(['/cart']); // maybe redirect to cart?
    }
  }

  toFilter(){
    this.router.navigate(['/u-filter']);
  }
  
  async initializeItems(): Promise<any> {
    const prodList = await this.afs.collection('items').valueChanges().pipe(first()).toPromise();
    return prodList;
  }

  async filterList(evt){
    this.prodList = await this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.prodList = this.prodList.filter(currentProd => {
      if (currentProd.itemName && searchTerm) {
        return (currentProd.itemName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentProd.itemAmount.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
      }
    })
  }
  
  logout(){
    this.auth.signOut();
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }
     
}