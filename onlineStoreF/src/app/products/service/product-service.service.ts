import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/getProducts');
  }
  // tslint:disable-next-line:typedef
  public findById(id: number): Observable<any>{
    return this.http.get(`${'http://localhost:8080/getProductById'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public save(product: Product){
    return this.http.post<Product>('http://localhost:8080/addProduct' , product);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number){
  return this.http.delete(`${'http://localhost:8080/deleteProduct'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public update(product: Product){
    return this.http.put<Product>('http://localhost:8080/updateProduct' , product);
  }
}
