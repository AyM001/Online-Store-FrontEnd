import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserAddComponent} from './users/components/user-add/user-add.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';

import {OrderListComponent} from './orders/components/order-list/order-list.component';
import {OrderFormComponent} from './orders/components/order-form/order-form.component';

import {ManufacturerListComponent} from './manufacturers/components/manufacturer-list/manufacturer-list.component';
import {ProductFormComponent} from './products/components/product-form/product-form.component';
import {ProductEditComponent} from './products/components/product-edit/product-edit.component';



const routes: Routes = [{path: 'getProducts', component: ProductListComponent},
  {path: 'getManufacturers', component: ManufacturerListComponent},
  {path: 'addProducts', component: ProductFormComponent},
  {path: 'editProducts/:id', component: ProductEditComponent},
  {path: 'getUsers', component: UserListComponent},
  {path: 'addUser', component: UserAddComponent},

  {path: 'editUser/:id', component: UserEditComponent},
  {path: 'getProducts', component: ProductListComponent},
  {path: 'getOrders', component: OrderListComponent},
  {path: 'addOrder', component: OrderFormComponent}
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
