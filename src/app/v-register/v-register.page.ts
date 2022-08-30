import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-v-register',
  templateUrl: './v-register.page.html',
  styleUrls: ['./v-register.page.scss'],
})
export class VRegisterPage implements OnInit {

  name: string;
  email: string;
  phone: string;
  cname: string;
  password: string;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }
  async registerVendor(){
    if(this.name && this.email && this.phone && this.cname && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'Processing..',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
        data.user.sendEmailVerification();
        this.afs.collection('vendor').doc(data.user.uid).set({
          "vendorId": data.user.uid,
          "vendorName": this.name,
          "vendorEmail": this.email,
          "vendorPhone": this.phone,
          "vendorCompany": this.cname,
          "createdAt": Date.now()
        })
        .then(()=> {
          loading.dismiss();
          this.toast('Registration Success! Please check your email to verify', 'success');
          this.router.navigate(['/vlog']);
        })
        .catch(error => {
          loading.dismiss(); 
          this.toast(error.message, 'danger');
          console.log(error);
        })
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    }else{
      this.toast('Please Complete the form', 'warning');
    }
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

