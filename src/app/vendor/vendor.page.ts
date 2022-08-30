import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  constructor(private router: Router) { }

        //when navigate to profile page
        toProfile(){

          this.router.navigateByUrl('/vprof');
        }

        //when navigate to upload page
        toUpload(){

          this.router.navigateByUrl('/vendor/upload');
        }
      
        //when navigate to product page
        toProduct(){
          this.router.navigateByUrl('/vendor/product');
        }
    
       //when navigate to orders page
       toOrder(){
        this.router.navigateByUrl('/vendor/orders');
      }
  
       //when navigate to reviews page
        toReviews(){
        this.router.navigateByUrl('/vendor/reviews');
      }

       //when logging out
       logOut(){

      }
      

  ngOnInit() {
  }

}
