import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  items: Observable<any[]>;

  itemName: string = '';
  itemAmount: string = '';
  itemCat: string = '';
  itemGen: string = '';
  itemDescription: string = '';
  itemsRef: AngularFirestoreCollection;

  selectedFile: any;
  fireStorage: any;
  loading: any;

  constructor(
    private db: AngularFirestore,
    private store: AngularFireStorage,
    private loadingController: LoadingController,
    private router: Router
    ) {
    this.itemsRef = db.collection('items');
    this.items = this.itemsRef.valueChanges();
  }
  chooseFile (event) {
    this.selectedFile = event.target.files
  }
  addItem(){
    this.itemsRef.add({
      itemName: this.itemName,
      itemAmount: this.itemAmount,
      itemCat: this.itemCat,
      itemDescription: this.itemDescription
    })
    .then(async resp => {
  
      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)
  
      this.itemsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      }).then(()=> {
        this.router.navigateByUrl('vendor/upload-complete');
      })
  
    }).catch(error => {
      console.log(error);
    })
  }

  async uploadFile(id, file) {
    if(file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.store.ref('items').child(id).put(file[0])
        this.loading.dismiss();
        return this.store.ref(`items/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    return this.loading.present();
  }
  ngOnInit(){
    
  }
}