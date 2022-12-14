import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { LoadingController, ToastController } from '@ionic/angular';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage {

  vendors: Vendor[];
  public listOfVendors: any[];
  public loadedListVendors: any[];


  constructor(private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController, 
    private afs: AngularFirestore,
    private vendorService: VendorService) { }

  async ngOnInit() {

    this.vendorService.getVendors().subscribe(vendors => {
      this.vendors = vendors;
    });

    this.firestore.collection(`vendor`).valueChanges().subscribe(listOfVendors => {
      this.listOfVendors = listOfVendors;
      this.loadedListVendors = listOfVendors;
    });
  }

  initializeItems(): void {
    this.listOfVendors = this.loadedListVendors;
  }

  //filter searchbar
  searchVendor(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if(!searchTerm){
      return;
    }

  this.listOfVendors = this.listOfVendors.filter(currentList => {
    if(currentList.vendorName && searchTerm) {
      if(currentList.vendorName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
  });

 }



}
