import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public queryString: String;

  constructor(
    private _router: Router,
  ) {
    this.queryString = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.queryString) {
      this._router.navigate(['/']).then(()=>{
        this._router.navigate(['search/'+this.queryString]);
      });   
    }
  }


  
}
