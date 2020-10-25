import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';
import {Product} from '../../../products/model/product';
import {ProductListComponent} from '../../../products/components/product-list/product-list.component';
import {Orderline} from '../../model/orderline';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orderline: Orderline;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productList: ProductListComponent,
              private orderService: OrderService) {
    this.orderline = new Orderline();
  }

  ngOnInit(): void {
  }
}
