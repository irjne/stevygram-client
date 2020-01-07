import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public chats: Chat[];
  public chat: Chat;

  constructor(private router: Router, private chatService: ChatService) { }

  async ngOnInit() {
    this.chats = await this.chatService.getChats();
  }

  redirectToNewChat() {
    this.router.navigate(['chats/new-chat']);
  }
}