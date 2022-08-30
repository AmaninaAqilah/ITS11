import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
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
    private afs: AngularFirestore,
    private router: Router) { }

    async ngOnInit() {
      this.productService.getProducts().subscribe(products => {
        this.products = products;
      });

      //show list of product
      this.afs.collection(`items`).valueChanges().subscribe(listOfproduct=> {
        this.listOfproduct = listOfproduct;
        this.loadedListProduct = listOfproduct;
      });
 
  }
  
  //go to edit product
  edit(id){
    this.router.navigate(['/vendor/edit/', id]);
  }
  

        //go back to vendor
        nextPage(){
          this.router.navigateByUrl('vendor');
        }
}

