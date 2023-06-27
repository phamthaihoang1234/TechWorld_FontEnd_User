import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private trending = "http://localhost:8081/trending-products";
  // private bestSeller = "http://localhost:8081/bestseller-products";
  // private highlight = "http://localhost:8081/highlight-products";

  // constructor(private http: HttpClient) {
    
  // }
  
  // getTrendingProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]> (`${this.trending}`);
  // }

  // getBestSellerProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]> (`${this.bestSeller}`);
  // }

  // getHighlightProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]> (`${this.highlight}`);
  // }

  url = 'http://localhost:8080/api/products';
  constructor(private HttpClient: HttpClient){}

  getAll(){
    return this.HttpClient.get(this.url);
  }

  getLasted(){
    return this.HttpClient.get(this.url + '/latest');
  }

  getBestSeller(){
    return this.HttpClient.get(this.url+'/bestseller');
  }

  getRated(){
    return this.HttpClient.get(this.url+ '/rated');

  }

  getOne(id: number){
    return this.HttpClient.get(this.url+'/'+id);
  }

  getByCategory(id: number){
    return this.HttpClient.get(this.url+'/category/'+id);
  }

  getSuggest(categoryId: number , productId: number){
    return this.HttpClient.get(this.url +'/suggest/'+ categoryId+ '/'+ productId);
  }
}
