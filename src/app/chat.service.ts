import { Injectable } from '@angular/core';
import { Chat } from './modules/chat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private httpClient: HttpClient) { }

  async getChats(): Promise<Chat[]> {
    let token = localStorage.getItem('token');
    return this.httpClient.get<Chat[]>(`http://localhost:3003/chats?token=${token}`).toPromise();
  }

  async getChatById(id: number, user: string): Promise<Chat> {
    return this.httpClient.get<Chat>(`http://localhost:3003/chats/${id}`).toPromise();
  }
}