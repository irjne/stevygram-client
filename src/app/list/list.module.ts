import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ChatComponent } from '../chat/chat.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
        BrowserModule,
        ListRoutingModule,
        HttpClientModule
    ]
})
export class ListModule { }
