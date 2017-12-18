import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
@Component({
    selector: 'app-message-input',
    template:`
        <div class="col-md-8 col-md-offset-2" >
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" id="content" class="form-control" #input>
            </div>
            <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Save</button>
        </div>
    
    `
})
export class MessageInputComponent {
    constructor(private messageService: MessageService){}
    inputValue:any;
    onSave(value:any){
        const message = new Message(value, 'Max');
        this.messageService.addMessage( message);
    }
}