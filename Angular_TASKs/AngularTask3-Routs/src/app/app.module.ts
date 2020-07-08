import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostService} from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';

const routes: Routes =  [
  {path: 'home', component: AppComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'posts', component: AllPostsComponent},
  {path: 'posts/:postId', component: PostComponent},
  // {path: 'users/:id/posts', component: PostsOfUserComponent},
  {path: 'users/:id/posts', component: AllPostsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    PostsOfUserComponent
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
