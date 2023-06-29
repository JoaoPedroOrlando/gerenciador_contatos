import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {IMedia, Contact} from '../models/contact';
import { idGenerator } from '../utils/idGenerator';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient){ }

  getContactList(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findOne(id:string):Observable<Contact>{
    return this.http.get<Contact>(`${this.baseUrl}/contacts/${id}`);
  }

  save(contact:Contact):Observable<Contact>{
    contact.id = idGenerator();
    const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json'})
		};
    return this.http.post<Contact>(`${this.baseUrl}/contacts`,contact,httpOptions);
  }

  update(contact:Contact):Observable<Contact>{
    const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json'})
		};
    return this.http.put<Contact>(`${this.baseUrl}/contacts/${contact.id}`,contact,httpOptions);
  }

  delete(id:string):Observable<any>{
    const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json'})
		};
    return this.http.delete(`${this.baseUrl}/contacts/${id}`,httpOptions);
  }
}

export interface IContact{
  id:string;
  name:string;
  lastName:string;
  phone:string;
  profession?:string;
  email?:string;
  medias?:IMedia;
}
