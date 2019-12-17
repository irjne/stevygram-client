import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public chats: Chat[];
  public chat: Chat;

  //@Output() eventEmitter: EventEmitter<Chat> = new EventEmitter();

  constructor(private chatService: ChatService) { }

  async ngOnInit() {
    this.chats = await this.chatService.getChats();
  }

  /*onSelectedChat(chat: Chat) {
    this.eventEmitter.emit(chat);
  }*/
}