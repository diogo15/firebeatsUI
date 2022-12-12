import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { API_BASE_URL } from '../constants';
import { ConsumerService } from './api-routes/consumer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private api:ConsumerService) {

  }

  login( data:FormData ) {

    return this.api.getToken(data).subscribe((res:any) => {
      this.setSession(res);
    });

  }
        
  private setSession(authResult:any) {
      const expiresAt = moment().add(30000,'second');

      localStorage.setItem('id_token', authResult.token);
      localStorage.setItem('id_user', authResult.user);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("id_user");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn() {
    return localStorage.getItem("id_user");
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration?expiration:"{}");
      return moment(expiresAt);
  }

}
