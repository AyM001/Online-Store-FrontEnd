import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

class IDropdownSettings {
}

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category: Category;
  dropdownSettings: IDropdownSettings = {};
  parents: Category[];
  parent: Category[];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.category = new Category();
    this.parents = [];
    this.parent = [];
    this.categoryService.findAll().subscribe(data => this.parents = data);
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
  goToCategoryList(){
    this.router.navigate(['/getCategories']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.category.parent = this.parent[0];
    this.categoryService.save(this.category).subscribe(result => this.goToCategoryList());
  }

}
