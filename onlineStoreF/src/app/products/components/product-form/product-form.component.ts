import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Manufacturer} from '../../../manufacturers/model/manufacturer';
import {ManufacturerServiceService} from '../../../manufacturers/service/manufacturer-service.service';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {Category} from '../../../categories/model/category';
import {CategoryService} from '../../../categories/service/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  product: Product;
  dropdownSettings: IDropdownSettings = {};
  manufacturers: Manufacturer[];
  selectedManufacturers: Manufacturer[];
  categories: Category[];
  selectedCategories: Category[];
  constructor(private productServiceService: ProductServiceService,
              private manufacturerServiceService: ManufacturerServiceService,
              private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new Product();
    this.manufacturers = [];
    this.selectedManufacturers = [];
    this.manufacturerServiceService.findAll().subscribe(data => this.manufacturers = data);
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.categories = [];
    this.selectedCategories = [];
    this.categoryService.findAll().subscribe(data => this.categories = data);
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
  onSubmit(){
    this.product.manufacturerDto = this.selectedManufacturers[0];
    this.product.categoryDto = this.selectedCategories[0];
    this.productServiceService.save(this.product).subscribe(result => this.goToProductList());
  }

  // tslint:disable-next-line:typedef
  goToProductList(){
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
