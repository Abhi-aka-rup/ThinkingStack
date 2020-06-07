import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule, RoutingComponents } from './user-routing.module';
import { UserComponent } from './user.component';
import { RestaurantService } from '../services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserComponent,
    RoutingComponents
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestaurantService
  ]
})
export class UserModule { }
