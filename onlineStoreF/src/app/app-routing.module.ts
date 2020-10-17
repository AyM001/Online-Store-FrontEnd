import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserAddComponent} from './users/components/user-add/user-add.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'addUser', component: UserAddComponent},
  {path: 'editUser/:id', component: UserEditComponent},
  {path: 'getProducts', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
