import { Component, OnInit } from '@angular/core';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  public chats: Chat[];
  public chat: Chat;
  sub;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private chatService: ChatService) { }

  async ngOnInit() {
    this.chats = await this.chatService.getChats();
  }
  redirectToAddChat() {
    this.router.navigate(['chats/new-chat']);

    this.sub = this.activatedRouter.params.subscribe(async params => {
      this.ngOnInit();
    });
  }

}
