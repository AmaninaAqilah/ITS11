import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

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
