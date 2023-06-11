import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListElementComponent } from './contact-list-element/contact-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactListElementComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([    
      { path: '', component: ContactFormComponent },
      { path: 'contactlist', component: ContactListComponent  },
      {path: 'details/:id', component: ContactFormComponent}
    ]),
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
