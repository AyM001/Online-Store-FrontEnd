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


  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOrderByUsername();
  }

  // tslint:disable-next-line:typedef
  getOrderByUsername() {
    this.orderService.getByUsername().subscribe(data => {
      this.order = data;
      if (this.order == null){
        this.order = new Order();
      }
    });
  }





// tslint:disable-next-line:typedef
  public update( idOrderLine: number, newQuantity: number) {
    this.orderService.update( idOrderLine, newQuantity).subscribe(data => {
      this.getOrderByUsername();
      console.log('Stergerea functioneaza');
    });
     // this.getOrderByUsername('');
  }
  // tslint:disable-next-line:typedef
  public updateChanged(username: string, idOrderLine: number){
    this.orderService.update( idOrderLine, 0).subscribe(data => {
      console.log('Stergerea functioneaza');
    });
  }

  // tslint:disable-next-line:typedef
  changeQuantity(orderLine: Orderline){
    const orderLineId = orderLine.id;
    const newQuantity = orderLine.quantity;
    console.log('Change order with id ' + orderLineId + ' with quantity ' + newQuantity);
    this.update( orderLineId, newQuantity);
  }
  // tslint:disable-next-line:typedef
  placeOrder(idOrder: number){
    this.orderService.placeOrder(idOrder).subscribe(data => {
      this.router.navigate(['/checkout']); // de pus path-ul de checkout si de sters a href din html
      console.log('Place order works!');
    });
  }
  // tslint:disable-next-line:typedef
 /* emptyCart(idOrder: number){
     this.id = this.route.snapshot.params.id; //il folosesti doar daca ai id in ruta
     this.orderService.delete(this.idOrder).subscribe( data => {
      this.router.navigate(['/getProducts']);
      console.log('Order deleted');
    });
  }*/
  // tslint:disable-next-line:typedef
  goToProducts(){
    this.router.navigate(['/getProducts']);
  }
}




