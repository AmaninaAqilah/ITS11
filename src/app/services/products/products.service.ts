import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  show_result_size: boolean = true;

  // FOR SLIDESHOW
  bannerImages = [
    {
      imgurl: '../../assets/sports.jpg'
    }, {
      imgurl: '../../assets/discount.jpg'
    }, {
      imgurl: '../../assets/sneakers.webp'
    }
  ];

  // DUMMY DATA OF PRODUCTS
  products = [
    {
      id : 1,
      imgurl: 'https://i.pinimg.com/originals/b8/91/04/b891040aa591b7af7c08fde579308885.jpg',
      name: 'Test 1',
      category: 'hats',
      price: 1000.2,
      totalStock: 10
    }, {
      id : 2,
      imgurl: 'https://i.pinimg.com/originals/b8/91/04/b891040aa591b7af7c08fde579308885.jpg',
      name: 'Test 2',
      category: 'bags',
      price: 2,
      totalStock: 10
    }, {
      id : 3,
      imgurl: 'https://i.pinimg.com/originals/b8/91/04/b891040aa591b7af7c08fde579308885.jpg',
      name: 'Test 3',
      category: 'clothes',
      price: 7,
      totalStock: 10
    }, {
      id : 4,
      imgurl: 'https://i.pinimg.com/originals/b8/91/04/b891040aa591b7af7c08fde579308885.jpg',
      name: 'Test 4',
      category: 'bags',
      price: 6500.99,
      totalStock: 10
    }
  ];

  // DUMMY DATA FOR PRODUCT CATEGORY
  // will make it into a button eventually
  categories : any = [
    {
      category : 'bags'
    }, {
      category : 'clothes'
    }, {
      category : 'hats'
    }
  ];

  constructor(
  ) { 
    
  }

  initProductList() {
    this.showResultCount();
  }

  showResultCount() {
    this.show_result_size = true;
    setTimeout(() => {
      this.show_result_size = false;
    }, 2000);
  }



}