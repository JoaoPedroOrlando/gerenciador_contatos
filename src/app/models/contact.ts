import {MediaEnum} from './enums/media-enum';

export class Contact{
    public id: string |null;
    public name: string|null;
    public lastName: string|null;
    public phone:string|null;
    public email:string|null;
    public profession: string|null;
    public medias: IMedia[] |null;
    
    constructor(){
        this.id = null;
        this.name = null;
        this.lastName = null;
        this.phone = null;
        this.email = null;
        this.profession = null;
        this.medias = null;
    }
}

export interface IMedia{
    mediatype: MediaEnum;
    profile:string;
}
