import {Component, Input} from "@angular/core";
import {MessageVO} from "../messages.models";

@Component({
    selector: "selected-message",
    templateUrl: "selected-message.component.html",
    styleUrls: ["selected-message.scss"]
})
export class SelectedMessageComponent {

    @Input() selectedMessage: MessageVO;


}