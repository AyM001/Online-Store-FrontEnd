import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../products/model/product';
import {Manufacturer} from '../model/manufacturer';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerServiceService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>('http://localhost:8080/getManufacturers');
  }
  // tslint:disable-next-line:typedef
  public findById(id: number): Observable<any>{
    return this.http.get(`${'http://localhost:8080//getManufacturerById'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public save(manufacturer: Manufacturer){
    return this.http.post<Manufacturer>('http://localhost:8080/addManufacturer' , manufacturer);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number){
    return this.http.delete(`${'http://localhost:8080/deleteManufacturer'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public update(manufacturer: Manufacturer){
    return this.http.put<Manufacturer>('http://localhost:8080/updateManufacturer' , manufacturer);
  }
}
