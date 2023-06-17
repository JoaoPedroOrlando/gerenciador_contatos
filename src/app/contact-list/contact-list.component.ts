import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ContactService,IContact } from '../services/contact.service';
import { ContactListElementComponent } from '../contact-list-element/contact-list-element.component';
import {contacts} from '../../assets/contacts'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contactsList: IContact[] = [];
  //contactsList!: Observable<IContact[]>;

  constructor(
    private contactService: ContactService,
    private router:Router){
    //this.contactsList = contactService.getContactList();
  }

  ngOnInit(): void {
    this.contactsList = this.contactService.getContactList();
  }

  deleteItemFromList(event:string){
    const operation:boolean = this.contactService.delete(event);
    operation ? this.contactsList = this.contactsList.filter(el => el.id != event) : null;
    console.log(event);
  }
  
  editItemFromList(event:string){
    this.router.navigate(['/details',event]);
  }
}
