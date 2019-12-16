import { Component, OnInit, Input } from '@angular/core';
import { User } from '../modules/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    console.log('users:', this.users);
  }
}