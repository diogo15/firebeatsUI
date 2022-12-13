import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SONG_API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

  const idToken = localStorage.getItem("id_token");

  if (idToken && req.url != "http://localhost:34250/api/Fileupload") {
    const cloned = req.clone({
        headers: req.headers.set("Authorization",
            "Bearer " + idToken),
    })

    return next.handle(cloned);

  } else {

    return next.handle(req);
    
  }
  }

}
