import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import {ResolvePostsService} from './services/post/resolve-posts.service';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {ResolveUserService} from './services/user/resolve-user.service';

const routes: Routes =  [
  {path: 'home', component: AppComponent},
  {path: 'users', component: AllUsersComponent},
  {
    path: 'users/:id', component: UserComponent,
    children: [{path: 'posts/:id', component: AllPostsComponent, resolve: {posts: ResolvePostsService}}],
    resolve: {user: ResolveUserService}
  },
  {path: 'posts', component: AllPostsComponent, resolve: {posts: ResolvePostsService}},
  {path: 'posts/:postId', component: PostComponent},
  // {path: 'users/:id/posts', component: AllPostsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
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
