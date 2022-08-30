import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-complete',
  templateUrl: './upload-complete.page.html',
  styleUrls: ['./upload-complete.page.scss'],
})
export class UploadCompletePage implements OnInit {

  constructor(private router:Router) { }

  nextPage(){
    this.router.navigateByUrl('vendor');
  }


  ngOnInit() {
  }

}
