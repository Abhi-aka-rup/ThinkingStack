import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurant1Component } from './restaurant1/restaurant1.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Menu1Component } from './menu1/menu1.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  { path: 'restaurant', component: Restaurant1Component },
  { path: 'restaurant/:id', component: Restaurant1Component },
  { path: 'home', component: MainpageComponent },
  { path: 'menu/:restaurantId', component:Menu1Component },
  { path: 'cart', component:CartComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'order' , component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const RoutingComponents=[CartComponent, Menu1Component,OrderComponent,Restaurant1Component,AboutComponent, MainpageComponent]
