import { Injectable } from '@angular/core';
import { Vendor } from '../models/vendor';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class VAuthService {

  vendor$: Observable<Vendor>;
  vendor: Vendor;
  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.vendor$ = this.afauth.authState.pipe(
      switchMap( vendor => {
        if(vendor){
          return this.afs.doc<Vendor>(`vendor/${vendor.uid}`).valueChanges();
        }else{
          return of(null);
        }
      })
    )
  }

  async register(email,password){
    const loading = await this.LoadingCtrl.create({
      message: 'Authenticating....',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=> {
      this.afauth.signInWithEmailAndPassword(email,password).then((data)=> {
        if(!data.user.emailVerified){
          loading.dismiss();
          this.toast('Please verify your email address!', 'warning');
          this.afauth.signOut();
        }else{
          loading.dismiss();
          this.router.navigate(['/vendor']);
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    })
  }
  
  async signOut(){
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut().then(()=> {
      loading.dismiss();
      this.router.navigate(['/v-login']);
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

