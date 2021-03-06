import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NewChatComponent } from './new-chat/new-chat.component';

const routes: Routes = [
  {
    path: 'chats', component: ListComponent,
    children: [
      { path: 'new-chat', component: NewChatComponent },
      { path: ':id', component: ChatComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/add-contact', component: AddContactComponent },
  { path: 'users/remove-contact/:phone', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
