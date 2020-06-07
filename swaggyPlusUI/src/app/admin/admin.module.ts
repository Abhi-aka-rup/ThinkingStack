import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, RoutingComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { DishService } from '../services/dish.service';



@NgModule({
  declarations: [AdminComponent,RoutingComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestaurantService,DishService
  ]
})
export class AdminModule { }
