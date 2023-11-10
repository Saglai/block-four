import { UrlTree } from "@angular/router";

export interface CanDeactivateComponent {
    canLeave(): boolean | UrlTree
}