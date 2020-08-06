import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'counter', loadChildren: () => import('../app/counter/counter.module').then(m => m.CounterModule)},
  {path: 'users', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
