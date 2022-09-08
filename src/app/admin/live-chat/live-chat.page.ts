import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.page.html',
  styleUrls: ['./live-chat.page.scss'],
})
export class LiveChatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  chats: Observable<any[]>;
  newMsg = '';

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chats = this.chatService.getChatMsg();
  }

  sendMsg(){
    this.chatService.addChatMsg(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
}
