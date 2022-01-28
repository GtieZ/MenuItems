import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoriesComponent } from "./components/categories/categories.component";
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { QueryComponent } from "./components/query/query.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const appRoutes: Routes = [
    {path: '', component: CategoriesComponent},
    {path: 'menu-items/:category', component: MenuItemComponent},
    {path: 'search/:query', component: QueryComponent},
    
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);