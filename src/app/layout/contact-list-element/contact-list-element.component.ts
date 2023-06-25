import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list-element',
  templateUrl: './contact-list-element.component.html',
  styleUrls: ['./contact-list-element.component.css']
})
export class ContactListElementComponent {
  @Input() name:string = '';
  @Input() lastName:string = '';
  @Input() id:string='';
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() editEvent: EventEmitter<string> = new EventEmitter<string>();

  deleteItem(){
    this.deleteEvent.emit(this.id);
  }

  editItem(){
    this.editEvent.emit(this.id);
  }
  
}
