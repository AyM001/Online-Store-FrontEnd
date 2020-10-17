import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  order: Order;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOrderByUsername('iulia');
  }

  // tslint:disable-next-line:typedef
  getOrderByUsername(username: string) {
    this.orderService.getByUsername(username).subscribe(data => {
      this.order = data;
    });
  }


  // tslint:disable-next-line:typedef
  getOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }


// tslint:disable-next-line:typedef
  deleteOrderById(id: number) {
    this.orderService.delete(id).subscribe(data => {
      this.getOrders();
    });

  }

}
