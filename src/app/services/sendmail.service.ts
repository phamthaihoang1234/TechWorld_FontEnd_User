import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  url = 'http://localhost:8081/api/send-mail'

  constructor(private httpClient: HttpClient) { }

  sendMailOtp(email:String) {
    return this.httpClient.post(this.url+'/otp', email);
  }
}
