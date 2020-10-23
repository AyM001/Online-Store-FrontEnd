import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {Orderline} from '../../model/orderline';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  order: Order = new Order();
  p = 1;
  numberOfItemsPerP = 2;
  id: number;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOrderByUsername('ana');
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
  public update(username: string, idOrderLine: number, newQuantity: number) {
    this.orderService.update(username, idOrderLine, newQuantity).subscribe(data => {
      this.getOrders();
      console.log('Stergerea functioneaza');
    });
     // this.getOrderByUsername('');
  }
  // tslint:disable-next-line:typedef
  public updateChanged(username: string, idOrderLine: number){
    this.orderService.update(username, idOrderLine, 0).subscribe(data => {
      this.getOrderByUsername('ana');
      console.log('Stergerea functioneaza');
    });
  }

  // tslint:disable-next-line:typedef
  changeQuantity(orderLine: Orderline){
    const orderLineId = orderLine.id;
    const newQuantity = orderLine.quantity;
    console.log('Change order with id ' + orderLineId + ' with quantity ' + newQuantity);
    this.update('ana', orderLineId, newQuantity);
  }
  // tslint:disable-next-line:typedef
  placeOrder(){
    this.id = this.route.snapshot.params.id;
    this.orderService.placeOrder(this.id).subscribe(data => {
      this.router.navigate(['/getOrders']);
      console.log('Place order works!');
    });
  }
}
