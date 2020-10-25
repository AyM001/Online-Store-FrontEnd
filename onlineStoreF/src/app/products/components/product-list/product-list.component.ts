import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../../../orders/service/order.service';
import {UserService} from '../../../users/service/user.service';
import {User} from '../../../users/model/user';
import {AuthService} from '../../../users/service/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css' ],
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentUser: User;

  closeResult = '';
  searchValue = '';
  p = 1;
  numberOfItemsPerP = 3;
  constructor(private productService: ProductServiceService,
              private authService: AuthService,
              private orderService: OrderService,
              private userService: UserService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  // tslint:disable-next-line:typedef
  verify(){
    this.currentUser = JSON.parse(sessionStorage.getItem(this.authService.USER_DATA_SESSION_ATTRIBUTE_NAME));
    // @ts-ignore
    if (this.currentUser.userRoleDto === 'ADMIN'){
      return false;
    }
    // @ts-ignore
    if (this.currentUser.userRoleDto === 'USER'){
      return true;
    }
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

  // tslint:disable-next-line:typedef
  addToCart(id: number) {
    this.orderService.addOrder(id).subscribe(data => {
      console.log('addded');
    } );
  }
}
