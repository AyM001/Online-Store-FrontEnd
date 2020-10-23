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
import {CategoryEditComponent} from './categories/components/category-edit/category-edit.component';
import {HomepageComponent} from './menu/homepage/homepage.component';
import {UserViewComponent} from './products/components/user-view/user-view.component';
import {ContactFormComponent} from './menu/contact-form/contact-form.component';
import {ContactMessageComponent} from './menu/contact-message/contact-message.component';
import {LoginComponent} from './users/login/login.component';




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
  {path: 'addCategory', component: CategoryAddComponent},

  {path: 'editCategory/:id', component: CategoryEditComponent},

  {path: '', component: HomepageComponent},
  {path: 'userview', component: UserViewComponent},
  {path: 'contactForm', component: ContactFormComponent},
  {path: 'contactMessage', component: ContactMessageComponent},
  {path: 'login', component: LoginComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
