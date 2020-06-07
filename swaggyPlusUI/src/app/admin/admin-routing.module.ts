import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminrestComponent } from './adminrest/adminrest.component';
import { AdminrestaddComponent } from './adminrestadd/adminrestadd.component';
import { AdminDishComponent } from './admin-dish/admin-dish.component';
import { AdminDishAddComponent } from './admin-dish-add/admin-dish-add.component';

const routes: Routes = [
  { path: '', component: AdminnavbarComponent },
  { path: 'restaurant/edit', component: AdminrestComponent },
  { path: 'restaurant/add', component: AdminrestaddComponent },
  { path: 'dishEdit/:restaurantId', component: AdminDishComponent},
  { path: 'dishAdd/:restaurantId', component: AdminDishAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const RoutingComponents=[AdminnavbarComponent,AdminrestComponent,AdminrestaddComponent, AdminDishComponent, AdminDishAddComponent]
