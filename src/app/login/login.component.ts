import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../modules/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  suNickname: string;
  suName: string;
  suSurname: string;
  suPhone: string;
  suPassword: string;
  phone: string;
  password: string;
  authorization: string;
  signupAlert: string;
  sub;

  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  async login() {
    try {
      this.authorization = await this.userService.getAuthorization(this.phone, this.password);
      localStorage.setItem('token', this.authorization);
      localStorage.setItem('userOnSession', this.phone);
      this.redirect();
    }
    catch (error) {
      this.authorization = "failed";
      return error;
    }
  }

  async signup() {
    try {
      let result = await this.userService.addUser(this.suName, this.suSurname, this.suNickname, this.suPhone, this.suPassword);
      this.signupAlert = "ok";
    }
    catch (error) {
      return error;
    }
  }

  redirect() {
    this.router.navigate(['chats']);
  }
}
