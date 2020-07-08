import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';

const routes: Routes =  [
  {path: 'home', component: AppComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'users/:id', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
