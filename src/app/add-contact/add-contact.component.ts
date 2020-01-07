import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  phone: string;
  alert: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async saveOnPhonebook() {
    try {
      await this.userService.addContact(this.phone);
      this.alert = "success";
    }
    catch (error) {
      this.alert = "fail";
      return error;
    }
  }
}
