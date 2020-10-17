import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) {
    this.order = new Order();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.orderService.addOrder(this.order).subscribe(result => {
      this.goToOrderList();
    });
  }

  // tslint:disable-next-line:typedef
  goToOrderList() {
    this.router.navigate(['/getOrders']);
  }

}
