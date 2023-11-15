import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CommonService } from "../../services/common.service";
import { inject } from "@angular/core";

export function AuthGuard(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authService = inject(CommonService);
    const router = inject(Router);
      
    if (authService.LoggedIn()) {
        return true;
    }

    return router.parseUrl('')
}