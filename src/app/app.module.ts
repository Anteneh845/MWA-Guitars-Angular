import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GuitarListComponent} from './guitar-list/guitar-list.component';
import {GuitarDetailComponent} from './guitar-detail/guitar-detail.component';
import {GuitarCardComponent} from './guitar-card/guitar-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CharLimitPipe} from './char-limit.pipe';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AddGuitarComponent} from './add-guitar/add-guitar.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {EditGuitarComponent} from './edit-guitar/edit-guitar.component';
import {ContainerComponent} from './container/container.component';
import {TokenInterceptor} from "./token.interceptor";

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
    RegisterComponent,
    EditGuitarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
