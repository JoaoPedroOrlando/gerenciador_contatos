import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ContactService,IContact } from '../../services/contact.service';
import { ContactListElementComponent } from '../contact-list-element/contact-list-element.component';
import {contacts} from '../../../assets/contacts'
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contactsList!: Observable<Contact[]>;

  constructor(
    private contactService: ContactService,
    private router:Router){
    this.contactsList = contactService.getContactList();
  }

  ngOnInit(): void {
    this.contactsList = this.contactService.getContactList();
  }

  deleteItemFromList(event:string){
    try{
      this.contactService.delete(event).subscribe(el=>{
        this.contactsList = this.contactService.getContactList();
      });
    }catch(err){
      console.log('erro ao deletar contato');
    }
  }
  
  editItemFromList(event:string){
    this.router.navigate(['/details',event]);
  }
}
