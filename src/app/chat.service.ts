import { Injectable } from '@angular/core';
import { Chat } from './modules/chat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //public url: string = 'http://localhost:3003/chats'
  constructor(private httpClient: HttpClient) { }

  /*getChats(): Promise<Chat[]> {
    return this.httpClient.get<Chat[]>(this.url).toPromise();
  }*/

  async getChats(): Promise<Chat[]> {
    return this.httpClient.get<Chat[]>("http://localhost:3003/chats").toPromise();
  }

  async getChatById(id: number): Promise<Chat> {
    return this.httpClient.get<Chat>(`http://localhost:3003/chats/${id}`).toPromise();
  }
}