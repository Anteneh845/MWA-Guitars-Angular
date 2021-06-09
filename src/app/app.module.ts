import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';
import { GuitarCardComponent } from './guitar-card/guitar-card.component';
import {HttpClientModule} from "@angular/common/http";
import { CharLimitPipe } from './char-limit.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddGuitarComponent } from './add-guitar/add-guitar.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarListComponent,
    GuitarDetailComponent,
    GuitarCardComponent,
    CharLimitPipe,
    NavBarComponent,
    AddGuitarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
