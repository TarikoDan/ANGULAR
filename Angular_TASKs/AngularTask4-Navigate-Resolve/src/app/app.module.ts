import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {RouterModule, Routes} from '@angular/router';
import {ResolveUserService} from './services/user/resolve-user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import {PostsService} from './services/post/posts.service';
import {ResolvePostsService} from './services/post/resolve-posts.service';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import {CommentService} from './services/comment/comment.service';
import { CommentsOfPostComponent } from './components/comments-of-post/comments-of-post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostsActivatorService} from './services/post/posts-activator.service';

const links: Routes = [
  {path: 'home', component: AppComponent},
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: {users: ResolveUserService},
    children: [
      {
        path: ':userId',
        component: UserComponent,
        children: [
          {
            path: 'posts',
            component: PostsOfUserComponent,
            resolve: {postsOfUser: ResolvePostsService},
            children: [
              {path: ':id/comments', component: CommentsOfPostComponent}
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'posts',
    component: AllPostsComponent,
    resolve: {posts: ResolvePostsService},
    canActivate: [PostsActivatorService]
  },
  {path: 'comments', component: CommentsOfPostComponent, canDeactivate: [CommentService]},
];
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    PostsOfUserComponent,
    CommentsOfPostComponent,
    AllPostsComponent
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
