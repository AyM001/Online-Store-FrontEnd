import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../service/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.product = new Product();
    this.id = this.route.snapshot.params.id;
    this.productService.findById(this.id).subscribe(data => {
      this.product = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.productService.update(this.product).subscribe(result => this.goToProductList());
  }

  // tslint:disable-next-line:typedef
  goToProductList() {
    this.router.navigate(['/getProducts']);
  }
}
