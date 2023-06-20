import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../common/Email';
import { Observable } from 'rxjs';
import { Customer } from '../common/Customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = "http://localhost:8081/api/account/profile";
  constructor(private http: HttpClient) { }

  getPersonalProfile(email: Email): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}`, email);
  }
}
