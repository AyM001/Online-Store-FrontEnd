import { Component, OnInit } from '@angular/core';
import {Product} from '../../../products/model/product';
import {ProductServiceService} from '../../../products/service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Manufacturer} from '../../model/manufacturer';
import {ManufacturerServiceService} from '../../service/manufacturer-service.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers: Manufacturer[];
  constructor(private manufacturerService: ManufacturerServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getManufacturers();
  }

  // tslint:disable-next-line:typedef
  getManufacturers() {
    this.manufacturerService.findAll().subscribe(data => {
      this.manufacturers = data;
      // this.airport = data;
    });
  }

  // tslint:disable-next-line:typedef
  addManufacturer() {
    this.router.navigate(['addManufacturer']);
  }

  // tslint:disable-next-line:typedef
  editManufacturer(id: number) {
    this.router.navigate(['editManufacturer/' + id]);
  }

  // tslint:disable-next-line:typedef
  deleteManufacturer(id: number) {
    this.manufacturerService.delete(id).subscribe(data => {
      this.getManufacturers();
    });
  }

}
