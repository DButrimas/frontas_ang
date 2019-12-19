import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BeersAddComponent } from './beers-add/beers-add.component';
import { RegisterComponent } from './register/register.component';
import { BeersDeleteComponent } from './beers-delete/beers-delete.component';


const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full'},
  {path: 'beers', component: BeersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'addbeer', component: BeersAddComponent},
  {path: 'register', component: RegisterComponent},
//  {path : 'entry-add', component: EntryAddComponent},
  {path : 'beers-details/:id', component: BeersDetailsComponent},
  {path : 'beers-delete/:id', component: BeersDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
