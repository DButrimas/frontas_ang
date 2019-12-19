import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { BeersAddComponent } from './beers-add/beers-add.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsAddComponent } from './comments-add/comments-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BeersDeleteComponent } from './beers-delete/beers-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeersAddComponent,
    BeersDetailsComponent,
    CommentsComponent,
    CommentsAddComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    BeersDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
