import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient){ }

  getContactList(): Observable<IContact[]>{
    return this.http.get<IContact[]>('/assets/contacts.json')
  }
    
}

export interface IContact{
  id:string;
  name:string;
  lastName:string;
  phone:string;
  profession?:string;
  email?:string;
}
