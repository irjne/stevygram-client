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
  sub;
  id;

  constructor(private activedRoute: ActivatedRoute, private chatService: ChatService) { }

  async ngOnInit() {
    this.sub = this.activedRoute.params.subscribe(async params => {
      this.id = params['id'];
      this.chat = await this.chatService.getChatById(this.id);
    });
  }

  //const id = this.activeRoute.snapshot.params.id;
  //this.chat = await this.chatService.getChatById(id);
}