import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { Search } from './u-search.model';

@Component({
  selector: 'app-u-search',
  templateUrl: './u-search.page.html',
  styleUrls: ['./u-search.page.scss'],
})
export class USearchPage implements OnInit {

//   sampleArr=[];
//  resultArr=[];

//   constructor(private fs: AngularFirestore) { }

//   ngOnInit() {
//   }
//   search(event){
//     let searchKey:string=event.target.value;
//     let firstLetter=searchKey.toUpperCase();

//     if(searchKey.length==0){
//      this.sampleArr=[];
//      this.resultArr=[];
//     }

//     if(this.sampleArr.length==0){
//      this.fs.collection(`items`,ref=>ref.where('SearchIndex', '==', firstLetter)).snapshotChanges().subscribe(data => {
//        data.forEach(childData => {
//          this.sampleArr.push(childData.payload.doc.data())
//        })
//      })
//     }
//     else{
//      this.resultArr=[];
//      this.sampleArr.forEach(val =>{
//        let name:string=val['itemName'];
//        if(name.toUpperCase().startsWith(searchKey.toUpperCase())){
//        if(true){
//          this.resultArr.push(val);
//        }
//        }
//      })
//     }
//  }

  products: Search[];
  public listOfproduct: any[];
  public loadedListProduct: any[];

  constructor(private productService: ProductService,
    private loadingCtrl: LoadingController,
    private toastr: ToastController, 
    private afs: AngularFirestore) { }

  async ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.afs.collection(`items`).valueChanges().subscribe(listOfproduct=> {
      this.listOfproduct = listOfproduct;
      this.loadedListProduct = listOfproduct;
    });
  }

  initializeItems(): void {
    this.listOfproduct = this.loadedListProduct;
  }

    //filter searchbar
    searchProduct(event) {
      this.initializeItems();
  
      const searchTerm = event.srcElement.value;
  
      if(!searchTerm){
        return;
      }
      this.listOfproduct = this.listOfproduct.filter(currentList => {
        if(currentList.itemName && searchTerm) {
          if(currentList.itemName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
            return true;
          }
          return false;
        }
      });
    
     }
}








 

  

  




