import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  private name:string ='';
  private lastName:string='';
  private phone:string='';
  private profession:string='';

  constructor(){}
}
