import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chat } from '../modules/chat';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //@Output() eventEmitter: EventEmitter<Chat> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  /*onSelectedChat(chat: Chat) {
    this.eventEmitter.emit(chat);
  }*/
}
