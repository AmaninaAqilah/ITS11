import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  nextPage(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
