import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//need to import this to use modules in a reactive way
//without this we cant bound our <form> to a FormGroup
//see more in contact.component.html
import { ReactiveFormsModule } from '@angular/forms';

//need to import this to call restful services on web...
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //...and do not forget to import both!
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
