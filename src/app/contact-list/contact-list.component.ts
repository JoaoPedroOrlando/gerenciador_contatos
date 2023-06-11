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
  contactsList: IContact[] = [...contacts];
  //contactsList!: Observable<IContact[]>;

  constructor(
    private contactService: ContactService,
    private router:Router){
    //this.contactsList = contactService.getContactList();
  }

  ngOnInit(): void {}

  deleteItemFromList(event:string){
    this.contactsList = this.contactsList.filter(el => el.id != event)
    console.log(event);
  }
  
  editItemFromList(event:string){
    this.router.navigate(['/details',event]);
  }
}
