import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AddUserComponent } from "../add-user/add-user.component";
import { CanDeactivateComponent } from "../../model/guard-component.interface";

export function canLeave(
    component: CanDeactivateComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (component.canLeave()) {
        return true;
    }

    const answer: boolean = confirm('You are not save the form. Are you ok?');

    if (answer === true) {
        return true;
    }

    return false;
}