import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'chats', component: ListComponent },
  { path: 'chats/:id', component: ChatComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
