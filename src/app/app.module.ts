import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContactFormComponent } from './layout/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { ContactListElementComponent } from './layout/contact-list-element/contact-list-element.component';
import { MediaInputComponent } from './layout/media-input/media-input.component';
import { AboutComponent } from './layout/about/about.component';
import { ModalAlertComponent } from './layout/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactListElementComponent,
    MediaInputComponent,
    AboutComponent,
    ModalAlertComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([    
      { path: '', component: ContactFormComponent },
      { path: 'contactlist', component: ContactListComponent  },
      {path: 'details/:id', component: ContactFormComponent},
      {path: 'about',component:AboutComponent}
    ]),
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
