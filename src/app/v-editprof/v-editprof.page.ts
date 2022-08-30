import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { VAuthService } from '../services/v-auth.service';

@Component({
  selector: 'app-v-editprof',
  templateUrl: './v-editprof.page.html',
  styleUrls: ['./v-editprof.page.scss'],
})
export class VEditprofPage implements OnInit {

  vendorId: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  

  constructor(
    private auth: VAuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.vendor$.subscribe(vendor => {
      this.vendorId = vendor.vendorId;
      this.name = vendor.vendorName;
      this.email = vendor.vendorEmail;
      this.phone = vendor.vendorPhone;
    })
  }
  cancel(){
    this.router.navigate(['/vprof']);
  }
  async updateProfile(){
    const loading = await this.loadingCtrl.create({
      message: 'updating...',
      spinner: 'crescent',
      showBackdrop: true

    });
    loading.present();

    this.afs.collection('vendor').doc(this.vendorId).set({
      'vendorName': this.name,
      'vendorEmail': this.email,
      'vendorPhone': this.phone,
      'editAt': Date.now(),
      'status': this.status
    }, {merge: true})

    .then(() => {
      loading.dismiss();
      this.toast('Update success', 'success');
      this.router.navigate(['/vprof']);
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });

    toast.present();
  }
}


