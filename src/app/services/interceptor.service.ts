import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const headers = new HttpHeaders({
        'Authorization' :'true'
      })

    const clone = req.clone({headers: headers});

    return next.handle(clone).
    pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error:HttpErrorResponse){
    return throwError(error)
  }
}
