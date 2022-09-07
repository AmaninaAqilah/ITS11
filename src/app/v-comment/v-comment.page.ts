import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-v-comment',
  templateUrl: './v-comment.page.html',
  styleUrls: ['./v-comment.page.scss'],
})
export class VCommentPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(){
    await this.alertCtrl.create({
      header: "Receipt Number",
      message: "Please enter your receipt number",
      inputs: [
        { type: 'text', name: 'receipt', placeholder: "Receipt number"}
      ],
      buttons: [
        { text: "Apply",handler: (res) => {
           
        }
      },
      {
        text: "cancel"
      }
      ]

    }).then(res => res.present());
  }

}



