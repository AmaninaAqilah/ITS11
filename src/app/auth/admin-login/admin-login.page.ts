import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AdminService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }
  loginAdmin(){
    if(this.email && this.password){
      this.auth.signUp(this.email, this.password);
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
