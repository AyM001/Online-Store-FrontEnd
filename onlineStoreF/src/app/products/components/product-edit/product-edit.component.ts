import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../service/product-service.service';
import {Manufacturer} from '../../../manufacturers/model/manufacturer';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {ManufacturerServiceService} from '../../../manufacturers/service/manufacturer-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  id: number;
  dropdownSettings: IDropdownSettings = {};
  manufacturers: Manufacturer[];
  selectedManufacturers: Manufacturer[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductServiceService,
              private manufacturerService: ManufacturerServiceService){
  }

  ngOnInit(): void {
    this.product = new Product();
    this.manufacturers = [];
    this.selectedManufacturers = [];
    this.id = this.route.snapshot.params.id;
    this.productService.findById(this.id).subscribe(data => {
      this.product = new Product();
      this.selectedManufacturers = [];
      this.product = data;
      this.selectedManufacturers.push(this.product.manufacturerDto);
    });
    this.manufacturerService.findAll().subscribe(data => this.manufacturers = data);
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.productService.update(this.product).subscribe(result => this.goToProductList());
  }

  // tslint:disable-next-line:typedef
  goToProductList() {
    this.router.navigate(['/getProducts']);
  }
  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }

  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }
}
