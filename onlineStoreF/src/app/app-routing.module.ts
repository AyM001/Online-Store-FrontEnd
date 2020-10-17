import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ManufacturerListComponent} from './manufacturers/components/manufacturer-list/manufacturer-list.component';
import {ProductFormComponent} from './products/components/product-form/product-form.component';
import {ProductEditComponent} from './products/components/product-edit/product-edit.component';

const routes: Routes = [{path: 'getProducts', component: ProductListComponent},
  {path: 'getManufacturers', component: ManufacturerListComponent},
  {path: 'addProducts', component: ProductFormComponent},
  {path: 'editProducts/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
