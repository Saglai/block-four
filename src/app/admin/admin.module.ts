import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddPoductComponent } from "./add-poduct/add-poduct.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DashboardComponent,
        AddPoductComponent,
        AddUserComponent,
        UserListComponent,
        UserDetailComponent
    ],
    providers: [],
    imports: [
        AdminRoutingModule,
        SharedModule
    ],
    exports: []
})
export class AdminModule {
}