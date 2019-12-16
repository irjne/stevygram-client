import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './modules/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stevygram';

  public usersList: User[] = [];
  constructor(public userService: UserService) { };

  async ngOnInit() {
    this.usersList = await this.userService.getUsers()
  }
}
