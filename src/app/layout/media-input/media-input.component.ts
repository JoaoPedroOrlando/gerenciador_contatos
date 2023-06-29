import { Component, NgModule } from '@angular/core';
import { IMedia } from 'src/app/models/contact';

@Component({
  selector: 'app-media-input',
  templateUrl: './media-input.component.html',
  styleUrls: ['./media-input.component.css']
})
export class MediaInputComponent {
  mediaValue:string | undefined;
  mediaList:IMedia[] | undefined;
  
  constructor(){}

  dropdownAction(option:string){
    console.log(option);
  }
}
