import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  
  id: string;
  itemName: string;
  itemAmount: number;
  itemDescription: string;
  itemCat: string;
  itemGen: string;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController) { 
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  ionViewWillEnter(){
    this.loadItem();
  }

  //load item
  async loadItem() {
    const loading = await this.loadingCtrl.create({
    message:'Loading..',
    spinner:'crescent',
    showBackdrop: true
    });

    loading.present();

    this.productService.getProduct(this.id).subscribe(product => {
      this.itemName = product.itemName;
      this.itemAmount = product.itemAmount;
      this.itemDescription = product.itemDescription;
      this.itemCat = product.itemCat;
      this.itemGen = product.itemGen;
      loading.dismiss();
    }

    )};

    //update item
    async updateItem() {
      const loading = await this.loadingCtrl.create({
      message:'Updating Item..',
      spinner:'crescent',
      showBackdrop: true
      });

      loading.present();

      this.afs.collection('items').doc(this.id).set({
        'itemName': this.itemName,
        'itemAmount': this.itemAmount,
        'itemDescription': this.itemDescription,
        'itemCat': this.itemCat,
        'itemGen': this.itemGen,
      },{merge: true})
      .then(()=>{
        loading.dismiss();
        this.toast('Item Updated Successfully', 'success');
        this.router.navigate(['/vendor/product']);
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });

    }

    //calling toast function
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
