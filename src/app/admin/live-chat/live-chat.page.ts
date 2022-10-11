import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService, Message } from 'src/app/services/chat.service';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.page.html',
  styleUrls: ['./live-chat.page.scss'],
})
export class LiveChatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  chats: Observable<any[]>;
  newMsg = '';
  fromName: string 

  constructor(private chatService: ChatService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.chats = this.chatService.getChatMsg();
    this.fromName = this.route.snapshot.params['fromName'];
  }

  sendMsg(){
    this.chatService.addChatMsg(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
}
