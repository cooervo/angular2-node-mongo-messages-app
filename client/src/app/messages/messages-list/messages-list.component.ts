import {Component, Input, Output, EventEmitter} from "@angular/core";
import {MessageVO} from "../messages.models";
import {DataService} from "../../shared/data.service";
import {Config} from "../../shared/strings";

@Component({
    selector: "messages-list",
    templateUrl: "messages-list.component.html",
    styleUrls: ["messages-list.scss"],
})
export class MessagesListComponent {

    @Input() messages: MessageVO[];
    @Output() selected: EventEmitter<MessageVO>;

    constructor(private dataService: DataService) {
        this.messages = [];
        this.selected = new EventEmitter<MessageVO>();
    }


    public getMessage(id: string, message): void {
        message.isRead = message.isRead ? false : true;

        // Url = localhost/messages/id
        let url = `${Config.baseUrl}/${Config.messages}/${id}`;

        this.dataService.getData(url).subscribe(
            // success
            data => {
                let selectedMessage = <MessageVO> data;
                this.selected.emit(selectedMessage);
            },

            // error
            error => {
                console.log(error);
            }
        );
    }

    public deleteMessage(id: string): void {

        // Url = localhost/messages/id
        let url = `${Config.baseUrl}/${Config.messages}/${id}`;
        console.log("url", url);

        this.dataService.deleteData(url).subscribe(
            // success
            data => {
                console.log(data)
            },

            // error
            error => {
                console.log(error);
            }
        );

    }


}