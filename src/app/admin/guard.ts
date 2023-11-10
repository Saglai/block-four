import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export function guard(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authService = inject(AuthService);
    const router = inject(Router);
      
    if (authService.LoggedIn()) {
        return true;
    }

    return router.parseUrl('')
}