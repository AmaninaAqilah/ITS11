import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
    private menu: MenuController,
    private auth: AuthService) {}

  //when navigate to about page
    aboutUs(){
      menuController.toggle();
      this.router.navigateByUrl('/about');
    }

   //when navigate to settings page
   settings(){
    menuController.toggle();
    this.router.navigateByUrl('/setting');
  }

  // when navigate to chat page
  chat(){
    menuController.toggle();
    this.router.navigateByUrl('/chat');
  }

    //when user enter logout from sidebar
  logout(){
    this.auth.signOut();
  }
}
