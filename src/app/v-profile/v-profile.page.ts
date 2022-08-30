import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VAuthService } from '../services/v-auth.service';

@Component({
  selector: 'app-v-profile',
  templateUrl: './v-profile.page.html',
  styleUrls: ['./v-profile.page.scss'],
})
export class VProfilePage implements OnInit {

  vendor: any;

  constructor(
    private vauth: VAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vauth.vendor$.subscribe(vendor => {
      this.vendor = vendor;
    })
  }
  editProfile(){
    this.router.navigate(['/vedit']);
  }
  changePass(){
    this.router.navigate(['/forgot-password']);
  }

}
