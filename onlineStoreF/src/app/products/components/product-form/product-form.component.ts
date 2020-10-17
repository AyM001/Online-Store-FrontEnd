import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductServiceService,
              private router: Router,
              private route: ActivatedRoute) {
    this.product = new Product();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.goToProductList());
  }

  // tslint:disable-next-line:typedef
  goToProductList() {
    this.router.navigate(['/getProducts']);
  }

  ngOnInit(): void {
  }
}
