import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {routeConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DataService} from "./shared/data.service";
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule, MdIconRegistry} from "@angular/material";

import {MessagesComponent} from "./messages/messages.component";
import {SelectedMessageComponent} from "./messages/selected-message/selected-message.component";
import {MessagesListComponent} from "./messages/messages-list/messages-list.component";

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        MessagesListComponent,
        SelectedMessageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routeConfig),
        MaterialModule.forRoot(),
        
    ],
    providers: [
        DataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.registerFontClassAlias("fontawesome", "fa");
    }
}

