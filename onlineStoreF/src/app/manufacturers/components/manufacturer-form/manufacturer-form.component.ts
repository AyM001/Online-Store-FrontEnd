import { Component, OnInit } from '@angular/core';
import {Product} from '../../../products/model/product';
import {ProductServiceService} from '../../../products/service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Manufacturer} from '../../model/manufacturer';
import {ManufacturerServiceService} from '../../service/manufacturer-service.service';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.css']
})
export class ManufacturerFormComponent implements OnInit {

  manufacturer: Manufacturer;

  constructor(private manufacturerService: ManufacturerServiceService,
              private router: Router,
              private route: ActivatedRoute) {
    this.manufacturer = new Manufacturer();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.manufacturerService.save(this.manufacturer).subscribe(result => this.goToManufacturerList());
  }

  // tslint:disable-next-line:typedef
  goToManufacturerList() {
    this.router.navigate(['/getManufacturers']);
  }

  ngOnInit(): void {
  }
}
