import { Component, OnInit } from '@angular/core';
import { Chat } from '../modules/chat';
import { User } from '../modules/user';
import { ChatService } from '../chat.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  public chats: Chat[];
  public chat: Chat;
  public users: User[];
  name;
  description;
  usersToAdd: string = "";
  alert;
  sub;

  constructor(private chatService: ChatService, private userService: UserService) { }

  async ngOnInit() {
    this.chats = await this.chatService.getChats();
    this.users = await this.userService.getUsers();
  }

  async createNewChat() {
    try {
      this.alert = "success";
      await this.chatService.createNewChat(this.name, this.description, this.usersToAdd);
    }
    catch (error) {
      this.alert = "fail";
      return error;
    }
  }
}
