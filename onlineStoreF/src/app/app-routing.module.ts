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
import {ManufacturerFormComponent} from './manufacturers/components/manufacturer-form/manufacturer-form.component';
import {ManufacturerEditComponent} from './manufacturers/components/manufacturer-edit/manufacturer-edit.component';
import {CategoryListComponent} from './categories/components/category-list/category-list.component';
import {CategoryAddComponent} from './categories/components/category-add/category-add.component';



const routes: Routes = [{path: 'getProducts', component: ProductListComponent},
  {path: 'getManufacturers', component: ManufacturerListComponent},
  {path: 'addProduct', component: ProductFormComponent},
  {path: 'addManufacturer', component: ManufacturerFormComponent},
  {path: 'editProduct/:id', component: ProductEditComponent},
  {path: 'editManufacturer/:id', component: ManufacturerEditComponent},
  {path: 'getUsers', component: UserListComponent},
  {path: 'addUser', component: UserAddComponent},

  {path: 'editUser/:id', component: UserEditComponent},
  {path: 'getOrders', component: OrderListComponent},
  {path: 'addOrder', component: OrderFormComponent},
  {path: 'getCategories', component: CategoryListComponent},
  {path: 'addCategory', component: CategoryAddComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
