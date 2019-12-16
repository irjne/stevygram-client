import { Component } from '@angular/core';
import { Chat } from './modules/chat';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stevygram';

  public chatsList: Chat[] = [];
  constructor(public chatService: ChatService) { };

  async ngOnInit() {
    this.chatsList = await this.chatService.getChats()
  }
}
