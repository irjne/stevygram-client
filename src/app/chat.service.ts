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

  async createNewChat(name: string, description: string, users: string): Promise<string> {
    let token = localStorage.getItem('token');
    return this.httpClient.post<string>(`http://localhost:3003/chats?token=${token}`, { name, description, users }).toPromise();
  }

  async addMessage(id, body): Promise<string> {
    let token = localStorage.getItem('token');
    let sender = localStorage.getItem('userOnSession');
    let date = new Date;
    return this.httpClient.put<string>(`http://localhost:3003/chats/${id}/messages?token=${token}`, { sender, body, date: date.toString() }).toPromise();
  }
}