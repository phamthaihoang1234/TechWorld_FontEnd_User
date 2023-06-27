import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlCart = 'http://localhost:8080/api/cart';
  urlCartDetail = 'http://localhost:8080/api/cartDetail';

  constructor(private httpClient : HttpClient) { }
}
