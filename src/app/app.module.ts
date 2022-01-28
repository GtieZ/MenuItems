import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueryComponent } from './components/query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NotFoundComponent,
    MenuItemComponent,
    NavbarComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
    
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
