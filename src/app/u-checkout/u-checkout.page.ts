import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-u-checkout',
  templateUrl: './u-checkout.page.html',
  styleUrls: ['./u-checkout.page.scss'],
})
export class UCheckoutPage implements OnInit {

  constructor(private router: Router) {
    render({
      id: "#myPaypalButtons",
      currency: "SGD",
      value: "1.00",
      onApprove: (details) => {
        
        
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        this.router.navigateByUrl('/u-checkout/order-success');
      }
    }
    );

   }

   

  ngOnInit() {
  }

}
