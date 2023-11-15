import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { CommonService } from "../services/common.service";

@Injectable({
    providedIn: 'root'
})
export class AdminPreloadStrategy implements PreloadingStrategy {
    
    constructor(private service: CommonService) {}
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (this.service.LoggedIn()) {
            fn();
        }

        return of(null);
    }
}