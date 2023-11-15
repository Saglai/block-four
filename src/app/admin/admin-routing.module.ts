import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/authGuard";
import { AddUserComponent } from "./add-user/add-user.component";
import { canLeave } from "./guards/can-leave.guard";
import { AddPoductComponent } from "./add-poduct/add-poduct.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { userDetailResolver } from "./guards/user-detail.resolver";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'add-user',
                component: AddUserComponent,
                canDeactivate: [canLeave]
            },
            {
                path: 'add-product',
                component: AddPoductComponent,
                canDeactivate: [canLeave]
            },
            {
                path: 'user-list',
                component: UserListComponent,
                data: { title: "User list" }
            },
            {
                path: 'user-list/:id',
                component: UserDetailComponent,
                resolve: {
                    user: userDetailResolver
                }
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}