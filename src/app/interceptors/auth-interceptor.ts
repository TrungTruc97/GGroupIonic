 
import { HttpInterceptor, HttpRequest, HttpHandler,HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UtilService } from '../service/util.service';
import { UtilService } from '../../service/util.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private util: UtilService,
      private router: Router) {
        this.util.getCookieValue('token');
    }

    headers = new Headers({
      'Content-Type': 'application/json',
      'Token': localStorage.getItem("Token")
  });


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.

        // const token=abp.auth.getToken();
        // const authReq = req.clone({
        //   headers: req.headers.set(
        //     'Authorization',
        //       'Bearer ' + token
        //   )
        // });

        // // send cloned request with header to the next handler.
        // return next.handle(authReq);

        //Dai code
         // Clone the request to add the new header.
         const authReq = req.clone({ headers: req.headers.set(AUTH_KEY, localStorage.getItem(AUTH_KEY)) });
         //send the newly created request
         return next.handle(authReq)
             .catch(err => {
                 // onError
                 if (err instanceof HttpErrorResponse) {
                     if (err.status === 401) {
                         window.location.href = "/account/login";
                     }
                 }
                 return Observable.throw(err);
             }) as any;
    }
}