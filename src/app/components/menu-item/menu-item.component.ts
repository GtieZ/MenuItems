import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MenuItem } from 'src/app/models/menu-item';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  providers: [MenuItemService]
})
export class MenuItemComponent implements OnInit {

  menuItems: MenuItem[];
  categoryName: string;
  status!: string;

  constructor(
    private _menuItemService: MenuItemService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.menuItems = []
    this.categoryName = "";
  }


  ngOnInit(): void {
    let categoryShortName!: string;

    this._route.params.subscribe(
      (params: Params) => {
        categoryShortName = params['category'];
      }
    );

    this._menuItemService.getItemsByCategory(categoryShortName).subscribe({
      next: response => {
        if (response.menu_items.length > 0) {
          this.menuItems = response.menu_items;
          this.categoryName = response.category.name;
          this.status = "success";
        } else {
          this._router.navigate(['/not-found']);
        }
      },
      error: error => {
        console.log(error);
        this.status = "error";
      }
    });

  }




}
