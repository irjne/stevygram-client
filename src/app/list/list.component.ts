import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../modules/chat';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public chats: Chat[];
  constructor(private userService: ChatService) { }

  async ngOnInit() {
    this.chats = await this.userService.getChats();
    console.log('users:', this.chats);
  }
}