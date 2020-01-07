import { Component } from '@angular/core';
import { Chat } from './modules/chat';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stevygram';

  constructor(private router: Router) { };

  async ngOnInit() {
    this.router.navigate(['login']);
  }
}
