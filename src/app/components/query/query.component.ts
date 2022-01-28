import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MenuItem } from 'src/app/models/menu-item';
import { MenuItemService } from 'src/app/services/menu-item.service';


@Component({
  selector: 'query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  providers: [MenuItemService]
})
export class QueryComponent implements OnInit {

  public menuItems: MenuItem[];
  public status: string;

  constructor(
    private _menuItemService: MenuItemService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.menuItems = [];
    this.status = "";
  }

  ngOnInit(): void {
    let query: string = "";
    this._route.params.subscribe(
      (params: Params) => {
        query = params['query'];
      }
    );

    this._menuItemService.getItems().subscribe({
      next: response => {
        if (response.menu_items.length > 0) {

          this.menuItems = response.menu_items;
          this.status = "success";
          this.filterMenuItems(query);

        } else {
          this.status = "error";
        }
      },
      error: error => {
        console.log(error);
        this.status = "error";
      }
    });
  }

  filterMenuItems(query: string) {
    this.menuItems = this.menuItems.filter(element => {
      return (
        element.name.toUpperCase().includes(query.toUpperCase())
        || element.description.toUpperCase().includes(query.toUpperCase())
      )
    });
  }

}
