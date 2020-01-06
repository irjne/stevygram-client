import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chat: Chat;
  sub;
  id;

  constructor(private activatedRouter: ActivatedRoute, private chatService: ChatService) { }

  async ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(async params => {
      this.id = params['id'];
      this.chat = await this.chatService.getChatById(this.id, localStorage.getItem('userOnSession'));
    });
  }
}