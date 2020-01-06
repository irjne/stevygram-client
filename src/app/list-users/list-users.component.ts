import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users: User[];
  public user: User;
  sub;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  redirectToAddContact() {
    this.router.navigate(['users/add-contact']);
  }

  async removeContact(phone: string) {
    await this.userService.removeContact(phone);

    this.sub = this.activatedRouter.params.subscribe(async params => {
      this.ngOnInit();
    });
  }
}