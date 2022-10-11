import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.page.html',
  styleUrls: ['./admin-register.page.scss'],
})
export class AdminRegisterPage implements OnInit {

  name: string;
  email: string;
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

  async registerAdmin(){
    if(this.name && this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
        this.afs.collection('admin').doc(data.user.uid).set({
          "adminId": data.user.uid,
          "adminName": this.name,
          "adminEmail": this.email,
          "createdAt": Date.now()
      })
      .then(()=> {
        loading.dismiss();
        this.toast('Registration Success! Please login to your account', 'success');
        this.router.navigate(['/a-login']);
      })
      .catch(error => {
        loading.dismiss();
        console.log(error.message, 'danger');
      })
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger')
      })
    } else {
      this.toast('Please complete the form', 'warning');
    }
  }
  async toast(message, status )
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
