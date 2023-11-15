import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-page.ts/home.component';
import { AuthGuard } from './admin/guards/authGuard';
import { AdminPreloadStrategy } from './admin/admin-preload-strategy';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(res => res.AdminModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AdminPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
