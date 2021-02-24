import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AdvertComponent } from './advert/advert-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdvertDetailsComponent } from './advert/advert-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertDetailesGuard } from './advert/advert-detailes.guard';
import { AdvertEditComponent } from './Advert/advert-edit/advert-edit.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './user/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    AdvertComponent,
    AdvertDetailsComponent,
    HomeComponent,
    AdvertEditComponent,
    UserComponent,
  
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'Advert', component: AdvertComponent},
      {path: 'Advert/:id', canActivate:[AdvertDetailesGuard], component: AdvertDetailsComponent},
      {path: 'Home', component: HomeComponent},
      {path:'Register', component: RegisterComponent},
      {path:'Log-in', component: LogInComponent},
      {path:'Edit', component: AdvertEditComponent},
      {path: '',redirectTo:'Home', pathMatch:'full'},
      {path:'**',redirectTo:'Home', pathMatch:'full'}
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
