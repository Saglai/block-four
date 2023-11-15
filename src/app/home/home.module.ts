import { NgModule } from "@angular/core";
import { HomeComponent } from "./home-page.ts/home.component";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: []
})
export class HomeModule {

}