import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  showEmailErr:boolean = false;

  contactForm: FormGroup = this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
    lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
    phone: ['', Validators.required],
    profession:['',Validators.maxLength(30)],
    email:['', [Validators.required, Validators.email]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ){}

  onSubmit(): void{
    if (this.contactForm.valid) {
      console.log("Submit feito", this.contactForm.value);
      this.contactForm.reset();
    } else {
      console.log(this.contactForm.controls['email'].status);
    }
    
  }

}
