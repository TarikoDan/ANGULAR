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
import {CommentService} from './services/comment/comment.service';
import {ResolveCommentsService} from './services/comment/resolve-comments.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {ResolveSingleCommentService} from './services/comment/resolve-single-comment.service';

const routes: Routes =  [
  {path: 'home', component: AppComponent},
  {path: 'users', component: AllUsersComponent},
  {
    path: 'users/:id', component: UserComponent,
    children: [{path: 'posts/:UserId', component: AllPostsComponent, resolve: {posts: ResolvePostsService}}],
    resolve: {user: ResolveUserService}
  },
  {path: 'posts', component: AllPostsComponent, resolve: {posts: ResolvePostsService}},
  {
    path: 'posts/:postId',
    component: PostComponent,
    children: [{path: 'comments/:PostId', component: AllCommentsComponent, resolve: {comment: ResolveCommentsService}}]
  },
  // {path: 'users/:id/posts', component: AllPostsComponent},
  {path: 'comments', component: AllCommentsComponent, resolve: {comment: ResolveCommentsService}},
  {path: 'comments/:CommentId', component: CommentComponent, resolve: {comment: ResolveSingleCommentService}}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
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
