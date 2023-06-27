import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartDetail } from '../common/CartDetail';
import { Cart } from '../common/Cart';

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

  updateCart(email:string, cart: Cart) {
    return this.httpClient.put(this.urlCart+'/user/'+email, cart);
  }

  getCart(email: string) {
    return this.httpClient.get(this.urlCart+'/user/'+email);
  }

  updateDetail(detail: CartDetail) {
    return this.httpClient.put(this.urlCartDetail, detail);
  }

  postCartDetail(detail : CartDetail){
return this.httpClient.post(this.urlCartDetail,detail);

  }

  deleteDetail(detailId:number) {
    return this.httpClient.delete(this.urlCartDetail+'/'+detailId);
  }
}
