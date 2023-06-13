import { Injectable } from '@angular/core';
import { Login } from '../common/Login';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { Register } from '../common/Register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8081/api/auth/';



  constructor(private sessionService: SessionService, private http: HttpClient) { }


  login(userData: Login): Observable<any> {
    return this.http.post(this.url + 'signin', userData);
  }
  register(user: Register): Observable<any> {
    return this.http.post(this.url + 'signup', user);
  }

}
