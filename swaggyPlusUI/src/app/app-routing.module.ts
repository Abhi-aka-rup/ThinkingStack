import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


  import { from } from 'rxjs';

import ('./user/user.module')

const routes: Routes = [
  {path: 'user-dashboard', loadChildren: './user/user.module#UserModule'},
  { path: 'admin-dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
