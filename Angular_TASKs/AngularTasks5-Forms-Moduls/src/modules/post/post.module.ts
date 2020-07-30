import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostService} from './services/post.service';
import { AllPostsComponent } from './all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ResolvePostService} from './services/resolve-post.service';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {path: '', component: AllPostsComponent, resolve: {loadedPosts: ResolvePostService}}
];
@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: []
})
export class PostModule { }
