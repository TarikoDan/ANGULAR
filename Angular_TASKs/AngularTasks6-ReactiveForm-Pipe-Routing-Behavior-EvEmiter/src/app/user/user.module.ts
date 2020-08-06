import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserComponent } from './all-user/all-user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: '', component: AllUserComponent}
];
@NgModule({
  declarations: [AllUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: []
})
export class UserModule { }
