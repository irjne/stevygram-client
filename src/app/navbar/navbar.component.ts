import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../modules/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selectedUser : User;
  @Output () eventEmitter : EventEmitter<User> = new EventEmitter ();


  constructor() { }

  ngOnInit() {
  }

  onSelectedUser (user :User){
    this.selectedUser = user;
    this.eventEmitter.emit(user);
  }
}
