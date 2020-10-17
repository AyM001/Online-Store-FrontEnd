import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import {ProductServiceService} from './products/service/product-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ManufacturerListComponent } from './manufacturers/components/manufacturer-list/manufacturer-list.component';
import { ProductFormComponent } from './products/components/product-form/product-form.component';
import { ProductEditComponent } from './products/components/product-edit/product-edit.component';
import { ManufacturerFormComponent } from './manufacturers/components/manufacturer-form/manufacturer-form.component';
import { ManufacturerEditComponent } from './manufacturers/components/manufacturer-edit/manufacturer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ManufacturerListComponent,
    ProductFormComponent,
    ProductEditComponent,
    ManufacturerFormComponent,
    ManufacturerEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
