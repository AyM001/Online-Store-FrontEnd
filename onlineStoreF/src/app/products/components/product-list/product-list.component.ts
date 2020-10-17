import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
      // this.airport = data;
    });
  }

  // tslint:disable-next-line:typedef
  addProduct() {
    this.router.navigate(['addProduct']);
  }

  // tslint:disable-next-line:typedef
  editProduct(id: number) {
    this.router.navigate(['editProduct/' + id]);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(data => {
      this.getProducts();
    });
  }
}
