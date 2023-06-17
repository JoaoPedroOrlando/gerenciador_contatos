import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../services/contact.service';
import { contacts } from 'src/assets/contacts';
import { IContact } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  id?:string = undefined;
  showEmailErr:boolean = false;
  contactsList = [...contacts];

  contactForm: FormGroup = this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
    lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
    phone: ['', Validators.required],
    profession:['',Validators.maxLength(30)],
    email:['', [Validators.email]],
    medias:['']
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
        const result = this.contactsList.find(el => el.id == this.id);
        if(result){
          this.contactForm.patchValue({
            name: result.name,
            lastName: result.lastName,
            phone: result.phone,
            profession: result.profession,
            email: result.email
          });
        }
      }
    });
  }

  onSubmit(): void{
    if (this.contactForm.valid) {
      try{
        const newContact:IContact ={
          id:"",
          name: this.contactForm.get('name')?.value,
          lastName: this.contactForm.get('lastName')?.value,
          phone: this.contactForm.get('lastName')?.value,
          profession: this.contactForm.get('lastName')?.value,
          email: this.contactForm.get('lastName')?.value,
        }
        const response = this.contactService.save(newContact);
        console.log("response from save: ",response);
      }catch(error){
        console.log('error: ',error);
      }
      console.log("Submit feito", this.contactForm.value);
      this.contactForm.reset();
    } 
  }

}
