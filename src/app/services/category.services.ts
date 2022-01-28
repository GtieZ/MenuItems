import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Category } from "../models/category";
import Global from "./global";


@Injectable()
export class CategoryService{

    public url: string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getCategories(): Observable<any>{
        let endpoint = this.url + "categories.json";
        
        return this._http.get(endpoint);
    }


}