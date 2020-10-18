import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../users/service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router, ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // tslint:disable-next-line:typedef
  getCategories(){
    this.categoryService.findAll().subscribe(data => { this.categories = data; });
  }
  // tslint:disable-next-line:typedef
  addCategory() {
    this.router.navigate(['addCategory']);
  }

  // tslint:disable-next-line:typedef
  editCategory(id: number) {
    this.router.navigate(['editCategory', id]);
  }

  // tslint:disable-next-line:typedef
  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe(data => {
      this.getCategories();
    });
  }
}
