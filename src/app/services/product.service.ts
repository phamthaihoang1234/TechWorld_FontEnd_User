import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


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

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.all}`);
  }

  getRatedProduct(): Observable<Product[]> {
    return this.http.get<Product[]> (`${this.rated}`);
  }
}
