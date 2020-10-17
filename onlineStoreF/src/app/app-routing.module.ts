import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/components/user-list/user-list.component";
import {UserAddComponent} from "./users/components/user-add/user-add.component";
import {UserEditComponent} from "./users/components/user-edit/user-edit.component";

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'addUser', component: UserAddComponent},
  {path: 'editUser/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
