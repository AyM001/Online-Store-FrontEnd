import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserAddComponent} from './users/components/user-add/user-add.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {OrderListComponent} from './orders/components/order-list/order-list.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ProductServiceService} from './products/service/product-service.service';
import {UserService} from './users/service/user.service';
import {OrderService} from './orders/service/order.service';
import { OrderFormComponent } from './orders/components/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    OrderListComponent,
    ProductListComponent,
    OrderFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  providers: [ProductServiceService, UserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
