import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { ChatService, Message } from 'src/app/services/chat.service';



@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

   chats: Observable<any[]>;

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    private router: Router,
    private afs: AngularFirestore
 ) { }

  ngOnInit() {
  this.chats = this.chatService.getChatMsg();
    
}

message(from){
  this.router.navigate(['/admin/live-chat/', from]);
}


}
