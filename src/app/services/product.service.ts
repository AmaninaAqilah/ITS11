import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productCol: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>;
  product: Observable<Product>;
  product$: any;

  constructor(private afs: AngularFirestore,
    public firestore: AngularFirestore) {
    
    this.productCol = this.afs.collection('items', ref =>ref.orderBy('itemName'));

    this.products = this.productCol.snapshotChanges().pipe(
    map(action => {
      return action.map(
        a =>{
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        }
       )
     })
    );
   }

   //get list of product
   getProducts(){
    return this.products;
   }

   //get to product
   getProduct(id){
    this.productDoc = this.afs.doc<Product>(`items/${id}`);
    return this.product = this.productDoc.valueChanges();
   }

   //add item
   async insertItem(
    itemName: string,
    itemAmount: string,
    itemCat: string,
    itemGen: string,
    itemDescription: string
  ): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.doc(`items/${id}`).set({
      id,
      itemName,
      itemAmount,
      itemCat,
      itemGen,
      itemDescription,
    });
  }

}
