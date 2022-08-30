import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products: Product[];
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
    searchProduct(evt) {
      this.initializeItems();
  
      const searchTerm = evt.srcElement.value;
  
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

  //delete product
  async delete(id: string): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message:'Deleting Item..',
      spinner:'crescent',
      showBackdrop:true
    });

    loading.present();
    this.afs.collection('items').doc(id).delete()
    .then(() => {
      loading.dismiss();
      this.toast('Item Successfully Deleted!','success')
    })
    .catch((error) => {
      this.toast(error.message, 'danger')
    });
  }
  

  //calling toastr function
  async toast(msg, status){
    const toast = await this.toastr.create({
      message: msg,
      position: 'top',
      color: status,
      duration: 2000
    });

    toast.present();
  }

}


