import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorCol: AngularFirestoreCollection<Vendor>;
  vendorDoc: AngularFirestoreDocument<Vendor>;
  vendors: Observable<Vendor[]>;
  vendor: Observable<Vendor>;
  vendor$: any;

  constructor(private afs: AngularFirestore,
    public firestore: AngularFirestore) { 

    this.vendorCol = this.afs.collection('vendor', ref =>ref.orderBy('vendorName'));

    this.vendors = this.vendorCol.snapshotChanges().pipe(
    map(action => {
      return action.map(
        a =>{
          const data = a.payload.doc.data() as Vendor;
          data.vendorId = a.payload.doc['vendorId'];
          return data;
        }
       )
     })
    );
   }

   //get list of vendor
   getVendors(){
    return this.vendors;
   }

   //get to vendor
   getVendor(vendorId){
    this.vendorDoc = this.afs.doc<Vendor>(`vendor/${vendorId}`);
    return this.vendor = this.vendorDoc.valueChanges();
   }
  }
