import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {ResolveUserService} from './services/user/resolve-user.service';
import {HttpClientModule} from '@angular/common/http';

const links: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'users', component: UserComponent, resolve: {users: ResolveUserService}},
  {path: 'posts', component: UserComponent},
  {path: 'comments', component: UserComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(links)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
