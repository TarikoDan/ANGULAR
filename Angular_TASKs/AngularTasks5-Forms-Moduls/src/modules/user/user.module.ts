import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {FormsModule} from '@angular/forms';
import { ObjectDeepnessPipe } from './services/object-deepness.pipe';
import { ArrayLevelsPipe } from './services/array-levels.pipe';

const  routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    children: [
      {path: ':id', component: SingleUserComponent}
    ]
  }
];

@NgModule({
  declarations: [AllUsersComponent, SingleUserComponent, ObjectDeepnessPipe, ArrayLevelsPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: []
})
export class UserModule { }
