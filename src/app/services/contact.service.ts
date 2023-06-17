import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient){ }

  // getContactList(): Observable<IContact[]>{
  //   return this.http.get<IContact[]>('/assets/contacts.json')
  // }

  getContactList():IContact[]{
    const contactsListStr: string | null = localStorage.getItem('contacts');
    if(contactsListStr){
      return <IContact[]> JSON.parse(contactsListStr);
    }
    return [];
  }

  findOne(id:string):IContact | null{
    const contactsListStr: string | null = localStorage.getItem('contacts');
    if(contactsListStr){
      const list:IContact[] = <IContact[]> JSON.parse(contactsListStr);
      const value:undefined |IContact =  list.find(el => el.id === id);
      return value ? value : null;
    }
    return null;
  }
  
  save(contact:IContact):IContact[]{
    //cria o id para o registro
    contact.id = Math.floor(Math.random() * 16777215).toString(16);
    const contactsListStr: string | null = localStorage.getItem('contacts');
    if(contactsListStr){
      let arr:IContact[] = <IContact[]> JSON.parse(contactsListStr);
      const arrLenght:number = arr.length;
      const newLenght:number = arr.push(contact);
      const strArr:string = JSON.stringify(arr);
      localStorage.setItem('contacts',strArr);
      if(arrLenght == newLenght ){
        throw {error:"Error trying to save contact"}
      }
      const newContactsListStr: string | null = localStorage.getItem('contacts');
      return newContactsListStr ? <IContact[]> JSON.parse(newContactsListStr) : [];
    }else{
      let newArr = [];
      newArr.push(contact);
      const strArr:string = JSON.stringify(newArr);
      localStorage.setItem('contacts',strArr);
      const newContactsListStr: string | null = localStorage.getItem('contacts');
      return newContactsListStr ? <IContact[]> JSON.parse(newContactsListStr) : [];
    }
  }

  delete(id:string):boolean{
    const contactsListStr: string | null = localStorage.getItem('contacts');
    if(contactsListStr){
      let arr:IContact[] = <IContact[]> JSON.parse(contactsListStr);
      localStorage.setItem('contacts',JSON.stringify(arr.filter(el => el.id != id)))
      return true;
    }
    return false;
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
