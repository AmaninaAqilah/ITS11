import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  products: Product[];

  public insertItemForm: FormGroup;
  constructor(
    private afs: AngularFirestore,
    
    private router: Router,
    public loadingCtrl: LoadingController,
     private productService: ProductService,
    formBuilder: FormBuilder) {
      this.insertItemForm = formBuilder.group({
        itemName: ['', Validators.required],
        itemAmount: ['', Validators.required],
        itemCat: ['', Validators.required],
        itemGen: ['', Validators.required],
        itemDescription: ['', Validators.required],
      });
     }

  ngOnInit() {
  }

  //add item
  async insertItem() {
    const loading = await this.loadingCtrl.create({
    message:'Adding Item..',
    spinner:'crescent',
    showBackdrop: true
    });
  
    const itemName = this.insertItemForm.value.itemName;
    const itemAmount = this.insertItemForm.value.itemAmount;
    const itemCat = this.insertItemForm.value.itemCat;
    const itemGen = this.insertItemForm.value.itemGen;
    const itemDescription = this.insertItemForm.value.itemDescription;
    
    this.productService
    .insertItem(itemName, itemAmount, itemCat, itemGen, itemDescription)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('vendor/upload-complete');
        });
      },
      error => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      }
    );
    return await loading.present();
  }


}
