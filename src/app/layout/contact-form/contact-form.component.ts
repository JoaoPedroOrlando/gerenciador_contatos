import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { contacts } from 'src/assets/contacts';
import { IContact } from '../../services/contact.service';
import { Contact, IMedia } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  id?:string = undefined;
  showEmailErr:boolean = false;
  contactsList = [...contacts];
  medias: IMedia[] = []; 

  contactForm: FormGroup = this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
    lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
    phone: ['', Validators.required],
    profession:['',Validators.maxLength(30)],
    email:['', [Validators.email]],
    medias:[[]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        console.log(this.id)
        this.contactService.findOne(this.id).subscribe((el)=>{
          this.contactForm.patchValue({
            name: el.name,
            lastName: el.lastName,
            phone: el.phone,
            profession: el.profession,
            email: el.email
          });
          if(el.medias){
            this.medias = el.medias;
          }
        });
      }
    });
  }

  onSubmit(): void{
    if (this.contactForm.valid) {
      try{
        const newContact = new Contact();
          newContact.name = this.contactForm.get('name')?.value;
          newContact.lastName = this.contactForm.get('lastName')?.value;
          newContact.email = this.contactForm.get('email')?.value;
          newContact.phone = this.contactForm.get('phone')?.value;
          newContact.profession = this.contactForm.get('profession')?.value;
          newContact.medias = this.medias;
        if(this.id){
          newContact.id = this.id;
          this.contactService.update(newContact).subscribe();
        }else{
          this.contactService.save(newContact).subscribe()
        }
      }catch(error){
        console.log('error: ',error);
      }
      this.medias.length = 0;
      this.contactForm.reset();
    } 
  }

  handleEvent(eventData: IMedia) {
    if(eventData.profile){
      this.medias.push(eventData);
    }
  }

  deleteItem(mediaProfile:string){
   this.medias = this.medias.filter(el=> el.profile !== mediaProfile);
  }

}
