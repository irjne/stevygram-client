import { Component, OnInit, Input } from '@angular/core';
import { User } from '../modules/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @Input() users: User[];
  constructor(private userService: UserService) { }

  async ngOnInit() {
    const users = await this.userService.getUsers();
    console.log('users:', users);
  }

}
