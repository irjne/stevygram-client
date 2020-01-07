import { User } from './user';

export interface Message {
    sender: string | User;
    body: string;
    date: Date;
}

export interface Chat {
    id: number;
    name: string;
    description: string;
    users: string[];
    messages: Message[];
    lastMessage: Message
}