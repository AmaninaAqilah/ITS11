import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { VAuthService } from 'src/app/services/v-auth.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.page.html',
  styleUrls: ['./vendor-login.page.scss'],
})
export class VendorLoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: VAuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  loginVendor(){
    if(this.email && this.password){
      this.auth.register(this.email, this.password);
    }else{
      this.toast('Please enter your email and password.', 'warning');
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
