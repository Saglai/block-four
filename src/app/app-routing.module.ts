import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddPoductComponent } from './admin/add-poduct/add-poduct.component';
import { guard } from './admin/guard';
import { canLeave } from './admin/can-leave.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'admin', 
    component: DashboardComponent,
    canActivate: [guard],
    children: [
      {
        path: '', 
        canActivateChild: [guard],
        children:[
          {
            path: 'add-user', 
            component: AddUserComponent,
            canDeactivate: [canLeave]
          },
          {
            path: 'add-product', 
            component: AddPoductComponent,
            canDeactivate: [canLeave]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
