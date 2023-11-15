import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommonServiceIntercept implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({headers: req.headers.set('Content-Type', 'application-json')});
        console.log(req);
        const startTime = Date.now();

        return next.handle(req).pipe(
            tap(event => {
                const spentTime = Date.now() - startTime;

                console.log(`Request for ${req.urlWithParams} took ${spentTime}`);

                if (event instanceof HttpResponse) {
                    console.log(event);
                }
            })
        )
    }
}