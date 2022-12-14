import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email && this.password){
      this.auth.signIn(this.email, this.password);
    }else{
      this.toast('Please enter your email and password', 'warning');
    }
  }
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration:2000
    });
    toast.present();
  }

}
