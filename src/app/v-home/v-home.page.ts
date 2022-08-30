import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VAuthService } from '../services/v-auth.service';

@Component({
  selector: 'app-v-home',
  templateUrl: './v-home.page.html',
  styleUrls: ['./v-home.page.scss'],
})
export class VHomePage implements OnInit {

  constructor(
    private vauth: VAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.vauth.signOut();
  }

  vendorProfile(){
    this.router.navigate(['/vprof']);
  }

}
