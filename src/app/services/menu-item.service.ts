import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Params } from "@angular/router";

import { MenuItem } from "../models/menu-item";
import Global from "./global";


@Injectable()
export class MenuItemService{

    url: string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getItemsByCategory(params: string): Observable<any>{
        let endpoint = this.url+"menu_items.json?category="+params;
        return this._http.get(endpoint);
    }


    getItems(): Observable<any>{
        let endpoint = this.url + "menu_items.json";
        return this._http.get(endpoint);
    }


}