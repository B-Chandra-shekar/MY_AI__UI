import { Routes } from '@angular/router';
import { ChatComponent } from './Chat/components/chat/chat.component';

export const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponent },
];
