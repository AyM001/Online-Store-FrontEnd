import {Component, OnInit} from '@angular/core';
import {Product} from '../../../products/model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../../products/service/product-service.service';
import {ManufacturerServiceService} from '../../service/manufacturer-service.service';
import {Manufacturer} from '../../model/manufacturer';

@Component({
  selector: 'app-manufacturer-edit',
  templateUrl: './manufacturer-edit.component.html',
  styleUrls: ['./manufacturer-edit.component.css']
})
export class ManufacturerEditComponent implements OnInit {

  manufacturer: Manufacturer;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private manufacturerService: ManufacturerServiceService) {
  }

  ngOnInit(): void {
    this.manufacturer = new Manufacturer();
    this.id = this.route.snapshot.params.id;
    this.manufacturerService.findById(this.id).subscribe(data => {
      this.manufacturer = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.manufacturerService.update(this.manufacturer).subscribe(result => this.goToManufacturerList());
  }

  // tslint:disable-next-line:typedef
  goToManufacturerList() {
    this.router.navigate(['/getManufacturers']);
  }
}
