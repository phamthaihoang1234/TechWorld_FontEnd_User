import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private trending = "http://localhost:8080/api/products/rated";
  private bestSeller = "http://localhost:8080/api/products/bestseller";
  private highlight = "http://localhost:8080/api/products/latest";
  private all = "http://localhost:8080/api/products/";
  private rated = "http://localhost:8080/api/products/rated";

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

  getRatedProduct(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.rated}`);
  }
}
