import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartDetail } from '../common/CartDetail';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlCart = 'http://localhost:8080/api/cart';
  urlCartDetail = 'http://localhost:8080/api/cartDetail';

  constructor(private httpClient : HttpClient) { }

  totalCartItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  $data: Observable<number> = this.totalCartItems.asObservable();

  setLength(totalItem: number){
    this.totalCartItems.next(totalItem);
  }

  getOneDetail(detailId:number) {
    return this.httpClient.get(this.urlCartDetail+'/'+detailId);
  }

  getAllCartDetail(cartId: number){

    return this.httpClient.get(this.urlCartDetail+'/cart'+ cartId);
  }

  postCartDetail(detail : CartDetail){
return this.httpClient.post(this.urlCartDetail,detail);

  }
}
