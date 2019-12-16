import { Injectable } from '@angular/core';
import { User } from '../app/modules/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = 'http://localhost:3003/users'
  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.url).toPromise();
  }
}
