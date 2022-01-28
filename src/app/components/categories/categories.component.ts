import { Component, OnInit } from '@angular/core';

import { Category } from "../../models/category"
import { CategoryService } from 'src/app/services/category.services';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {


  public categories: Category[];

  constructor(
    private _categoryService: CategoryService,
  ) {
    this.categories = [];
  }

  ngOnInit(): void {
    this._categoryService.getCategories().subscribe({
      next: response => {
        if(response){
          this.categories = response;
        } 
      },
      error: error => {
        console.log(error);
      }
    });
  }



}
