import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { IMedia } from 'src/app/models/contact';
import { MediaEnum } from 'src/app/models/enums/media-enum';

@Component({
  selector: 'app-media-input',
  templateUrl: './media-input.component.html',
  styleUrls: ['./media-input.component.css']
})
export class MediaInputComponent {
  @Output() myEvent: EventEmitter<IMedia> = new EventEmitter<IMedia>();

  mediaValue:string = "";
  mediaIcon:string = 'facebook';
  mediaTypeEnum: MediaEnum = MediaEnum.FACEBOOK;

  constructor(){}

  dropdownAction(option:string){
    switch (option) {
      case 'facebook':
        this.mediaIcon = 'facebook';
        this.mediaTypeEnum = MediaEnum.FACEBOOK;
        break;
      case 'whatsapp':
        this.mediaIcon = 'whatsapp';
        this.mediaTypeEnum = MediaEnum.WHATSAPP;
        break;
      case 'instagram':
        this.mediaIcon = 'instagram';
        this.mediaTypeEnum = MediaEnum.INSTAGRAM;
        break;
      case 'linkedin':
        this.mediaIcon = 'linkedin';
        this.mediaTypeEnum = MediaEnum.INSTAGRAM;
        break;
      default:
        this.mediaIcon = 'facebook';
        this.mediaTypeEnum = MediaEnum.LINKEDIN;
    }
  }

  emitEvent() {
    this.myEvent.emit({ 
      mediatype: this.mediaTypeEnum,
      profile:this.mediaValue} as IMedia
    );
    this.mediaValue = "";
  }
}
