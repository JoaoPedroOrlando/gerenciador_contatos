import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactService,IContact } from '../services/contact.service';
import { ContactListElementComponent } from '../contact-list-element/contact-list-element.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contactsList!: Observable<IContact[]>;

  constructor(private contactService: ContactService){
    this.contactsList = contactService.getContactList();
    console.log("Lista de contatos: ",this.contactsList);
  }

  ngOnInit(): void {}

  deleteItemFromList(event:string){
    console.log(event);
  }
  
}
