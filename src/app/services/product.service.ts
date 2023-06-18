import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private trending = "http://localhost:8081/trending-products";
  private bestSeller = "http://localhost:8081/bestseller-products";
  private highlight = "http://localhost:8081/highlight-products";
  private all = "http://localhost:8081/all-products";

  constructor(private http: HttpClient) {
    
  }
  
  getTrendingProducts(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.trending}`);
  }

  getBestSellerProducts(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.bestSeller}`);
  }

  getHighlightProducts(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.highlight}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.all}`);
  }
}
