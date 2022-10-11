import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

      //when navigate to chat page
      toChat(){

        this.router.navigateByUrl('/admin/channels');
      }
    
      //when navigate to product page
      toProduct(){

        this.router.navigateByUrl('/admin/product');
      }
  
    //when navigate to vendors page
      toVendor(){

        this.router.navigateByUrl('/admin/vendors');
      }
  
     //when navigate to orders page
     toOrder(){
      this.router.navigateByUrl('/admin/orders');
    }
  
     //when navigate to shipments page
     toShip(){
      this.router.navigateByUrl('/admin/shipments');
    }

     //when navigate to reviews page
      toReviews(){
      this.router.navigateByUrl('/admin/reviews');
    }

         //when logging out
         logOut(){

        }
    

  ngOnInit() {
  }

}
