import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserAddComponent} from './users/components/user-add/user-add.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ManufacturerListComponent} from './manufacturers/components/manufacturer-list/manufacturer-list.component';
import {ProductFormComponent} from './products/components/product-form/product-form.component';
import {ProductEditComponent} from './products/components/product-edit/product-edit.component';
import {ManufacturerFormComponent} from './manufacturers/components/manufacturer-form/manufacturer-form.component';
import {ManufacturerEditComponent} from './manufacturers/components/manufacturer-edit/manufacturer-edit.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {OrderListComponent} from './orders/components/order-list/order-list.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ProductServiceService} from './products/service/product-service.service';
import {UserService} from './users/service/user.service';

import {OrderService} from './orders/service/order.service';
import {OrderFormComponent} from './orders/components/order-form/order-form.component';


import {CategoryListComponent} from './categories/components/category-list/category-list.component';
import {CategoryAddComponent} from './categories/components/category-add/category-add.component';
import {CategoryService} from './categories/service/category.service';

import {ManufacturerServiceService} from './manufacturers/service/manufacturer-service.service';

import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './menu/menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ContentComponent } from './menu/content/content.component';

import { CategoryEditComponent } from './categories/components/category-edit/category-edit.component';

import {HomepageComponent} from './menu/homepage/homepage.component';
import { UserViewComponent } from './products/components/user-view/user-view.component';
import { ContactFormComponent } from './menu/contact-form/contact-form.component';
import { ContactMessageComponent } from './menu/contact-message/contact-message.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationMessageComponent } from './menu/registration-message/registration-message.component';
import {HttpInterceptorService} from './users/service/http-interceptor.service';
import { CheckoutFormComponent } from './menu/checkout-form/checkout-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ManufacturerListComponent,
    ProductFormComponent,
    ProductEditComponent,
    ManufacturerFormComponent,
    ManufacturerEditComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    OrderListComponent,
    ProductListComponent,
    OrderFormComponent,
    CategoryListComponent,
    CategoryAddComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,

    CategoryEditComponent,

    HomepageComponent,
    UserViewComponent,
    ContactFormComponent,
    ContactMessageComponent,
    LoginComponent,
    RegistrationMessageComponent,
    CheckoutFormComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [ProductServiceService, UserService, OrderService, ManufacturerServiceService, CategoryService,
{
  provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
