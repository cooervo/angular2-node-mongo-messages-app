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
    public dateFormat: string;

    constructor(private dataService: DataService) {
        this.messages = [];
        this.selected = new EventEmitter<MessageVO>();
        this.dateFormat = "EEE dd MMMM, HH:mm";
    }


    /**
     * Get a message based on its id
     *
     * @param id
     * @param message
     */
    public getMessage(id: string, message): void {
        message.isRead = true;

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

    /**
     * Deletes a message on database based on the id and on client based on index in array
     *
     * @param id
     * @param index
     */
    public deleteMessage(id: string, index: number): void {

        // Url = localhost/messages/id
        let url = `${Config.baseUrl}/${Config.messages}/${id}`;

        this.dataService.deleteData(url).subscribe(
            // success
            data => {
                if(data.success){
                    this.messages.splice(index, 1);
                }

            },

            // error
            error => {
                console.log(error);
            }
        );

    }


}