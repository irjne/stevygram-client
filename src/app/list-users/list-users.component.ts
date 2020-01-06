import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users: User[];
  public user: User;

  constructor(private router: Router, private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  redirectToAddContact() {
    this.router.navigate(['users/add-contact']);
  }
}
