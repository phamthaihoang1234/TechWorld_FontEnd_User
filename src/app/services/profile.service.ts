import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../common/Email';
import { Observable } from 'rxjs';
import { Customer } from '../common/Customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "http://localhost:8081/api/account/profile";
  constructor(private http: HttpClient) { }

  getPersonalProfile(email: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    console.log(email);
    return this.http.post<Customer>(`${this.url}`, JSON.stringify(email), {headers: headers});
  }
}
