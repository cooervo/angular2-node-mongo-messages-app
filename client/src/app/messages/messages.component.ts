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

    private

    constructor(private dataService: DataService) {
        this.messages = [];
        this.selectedMessage = new MessageVO();
    }

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

    public onSelected($event): void {
        this.selectedMessage = <MessageVO> $event;
        console.log("this.selectedMessage", this.selectedMessage)
    }

}
