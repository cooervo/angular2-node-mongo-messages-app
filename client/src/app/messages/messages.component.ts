import {Component, OnInit} from '@angular/core';

import {DataService} from "../shared/data.service";
import {Config} from "../shared/strings";
import {MessageVO} from "./messages.models";

@Component({
    selector: 'messages',
    styleUrls: ['messages.component.scss'],
    templateUrl: 'messages.component.html',
})
export class MessagesComponent implements OnInit {

    public messages: MessageVO[];
    private selectedMessage: MessageVO;

    constructor(private dataService: DataService) {
        this.messages = [];
        this.selectedMessage = new MessageVO();
    }

    /**
     * On init get Messages from Database
     */
    ngOnInit(): void {

        // Url = localhost/messages
        let url = `${Config.baseUrl}/${Config.messages}`;

        this.dataService.getData(url).subscribe(
            data => {
                this.messages = <MessageVO[]> data;
            },
            error => {
                console.log(error);

            }
        );
    }

    /**
     * On selected pass message to parent & sibling components
     */
    public onSelected($event): void {
        this.selectedMessage = <MessageVO> $event;
    }

}
