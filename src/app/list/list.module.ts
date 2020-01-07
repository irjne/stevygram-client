import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ChatComponent } from '../chat/chat.component';

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ]
})
export class ListModule { }
