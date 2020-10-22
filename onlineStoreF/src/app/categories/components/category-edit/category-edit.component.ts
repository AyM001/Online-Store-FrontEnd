import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  dropdownSettings: IDropdownSettings = {};
  parents: Category[];
  parent: Category[];
  id: number;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.category = new Category();
    this.parents = [];
    this.parent = [];
    this.id = this.route.snapshot.params.id;
    this.categoryService.getById(this.id).subscribe(data => {
      this.category = new Category();
      this.parent = [];
      this.category = data;
      this.parent.push(this.category.parent);
    });
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
    this.categoryService.update(this.category).subscribe(result => this.goToCategoryList());
  }

}
