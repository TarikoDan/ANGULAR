import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const links: Routes = [
  {path: '', component: AppComponent},
  {path: 'users', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
];

@NgModule({
  declarations: [
    AppComponent
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
