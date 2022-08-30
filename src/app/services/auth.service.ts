import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { switchMap } from 'rxjs/operators';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<User>;
  user: User;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.user$ = this.afauth.authState.pipe(
      switchMap ( user => {
        if (user)
        {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }
  
  async signIn(email, password)
  {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=> {
      this.afauth.signInWithEmailAndPassword(email, password).then((data)=> {
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('Please verify your email address!', 'warning');
          this.afauth.signOut();
        } else {
          loading.dismiss();
          this.router.navigate(['/home']);
        }
      })
      .catch(error=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  }
  

  async signOut()
  {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut()
    .then(()=> {
      loading.dismiss();
      this.router.navigate(['/login']);
    })
  }
  async toast(message, status)
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
