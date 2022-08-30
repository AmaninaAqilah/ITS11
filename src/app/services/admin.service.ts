import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
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
export class AdminService {

  admin$: Observable<Admin>;
  admin: Admin;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.admin$ = this.afauth.authState.pipe(switchMap(
      admin => {
        if (admin) {
          return this.afs.doc<Admin>(`admin/${admin.uid}`).valueChanges();
        }else{
          return of (null);
        }
      }
    ))
  }
  async signUp(email,password){
    const loading = await this.LoadingCtrl.create({
      message: 'Authenticating....',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=> {
      this.afauth.signInWithEmailAndPassword(email,password).then((data)=> {
        if(!data.user){
          loading.dismiss();
          this.toast('Invalid credentials!', 'warning');
          this.afauth.signOut();
        }else{
          loading.dismiss();
          this.router.navigate(['/admin']);
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
      this.router.navigate(['/admin-login']);
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

