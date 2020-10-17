import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:8080/getOrders');
  }

  public addOrder(order: Order): Observable<any>{
    return this.http.post<any>('http://localhost:8080/addOrder', order);
  }

  public delete(idOrder: number): Observable<any>
  {
    return this.http.delete<any>('http://localhost:8080/deleteOrder/' + idOrder);

  }

  // tslint:disable-next-line:typedef
  public update(order: Order) {
    return this.http.put<Order>('http://localhost:8080/updateOrder', order);
  }

  public getById(idOrder: number): Observable<any> {
    return this.http.get('http://localhost:8080/getOrderById/' + idOrder);
  }



  public getByUsername(username: string): Observable<any> {
    return this.http.get<Order>('http://localhost:8080/orders/getByUsername/' + username);
  }



}
