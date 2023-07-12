import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../common/Email';
import { Observable } from 'rxjs';
import { Customer } from '../common/Customer';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "http://localhost:8081/api/account/profile";
  constructor(private http: HttpClient, private sessionService: SessionService) { }

  getPersonalProfile(email: string): Observable<any> {
    let token = this.sessionService.getToken();
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type':'application/json; charset=utf-8'});
    console.log(headers);
    return this.http.post<Customer>(`${this.url}`, JSON.stringify(email), {headers: headers});
  }
}
