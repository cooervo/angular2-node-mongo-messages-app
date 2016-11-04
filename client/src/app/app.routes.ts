import {Routes} from '@angular/router';
import {MessagesComponent} from "./messages/messages.component";

export const routeConfig: Routes = [
    {path: '', redirectTo: 'messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: '**', redirectTo: 'messages'},
];

