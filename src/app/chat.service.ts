import { Injectable } from '@angular/core';
import { Chat } from './modules/chat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private httpClient: HttpClient) { }

  async getChats(): Promise<Chat[]> {
    return this.httpClient.get<Chat[]>("http://localhost:3003/chats").toPromise();
  }

  async getChatById(id: number): Promise<Chat> {
    return this.httpClient.get<Chat>(`http://localhost:3003/chats/${id}`).toPromise();
  }
}