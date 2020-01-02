import { Injectable } from '@angular/core';
import { User } from './modules/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3003/users").toPromise();
  }

  async getAuthorization(phone: string, password: string): Promise<string> {
    return this.httpClient.post<string>(`http://localhost:3003/users/login/${phone}/${password}`, null).toPromise();
  }

  async addUser(name: string, surname: string, nickname: string, phone: string): Promise<string> {
    return this.httpClient.post<string>(`http://localhost:3003/users/`, { nickname, name, surname, phone }).toPromise();
  }
}
