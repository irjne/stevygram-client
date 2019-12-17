import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chat: Chat;

  constructor(private activeRoute: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    //const id = this.activeRoute.snapshot.params.id;
  }

  onChatReceived (chat: Chat) {
    this.chat = chat; 
    console.log("Chat: " + this.chat);
  }
}
