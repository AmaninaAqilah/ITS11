import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public firestore: AngularFirestore) { }

  getProdList(): Observable<Product[]> {
    return this.firestore.collection<Product>(`items`).valueChanges();
  }

  getProdDetail(productId): Observable<Product> {
    return this.firestore.collection(`items`).doc<Product>(productId).valueChanges();
  }

}
