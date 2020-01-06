import { Injectable } from '@angular/core';
import { User } from './modules/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User[]> {
    let token = localStorage.getItem('token');
    return this.httpClient.get<User[]>(`http://localhost:3003/users?token=${token}`).toPromise();
  }

  async getAuthorization(phone: string, password: string): Promise<string> {
    return this.httpClient.post<string>(`http://localhost:3003/users/login`, { phone, password }).toPromise();
  }

  async addUser(name: string, surname: string, nickname: string, phone: string, password: string): Promise<string> {
    return this.httpClient.post<string>(`http://localhost:3003/users/`, { nickname, name, surname, phone, password }).toPromise();
  }

  async addContact(userToAdd: string): Promise<string> {
    const user = localStorage.getItem('userOnSession');
    let token = localStorage.getItem('token');
    return this.httpClient.post<string>(`http://localhost:3003/users/add-contact?token=${token}`, { "phone": userToAdd }).toPromise();
  }
}
