import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css' ],
})
export class ProductListComponent implements OnInit {

  products: Product[];
  closeResult = '';
  searchValue = '';
  p = 1;
  numberOfItemsPerP = 3;
  constructor(private productService: ProductServiceService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
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
  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteProduct(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
