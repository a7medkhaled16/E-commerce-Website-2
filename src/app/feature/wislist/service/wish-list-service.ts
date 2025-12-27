import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private httpclient:HttpClient){}

    // isWishlist:BehaviorSubject <number>= new BehaviorSubject<number>(0) 
  
  addtowishlist(productId:string):Observable<any>{
    return this.httpclient.post(enviroment.baseUrl +'wishlist',{
      productId
    })
  }

  removefromwishlist(productId:string):Observable<any>{
    return this.httpclient.delete(enviroment.baseUrl +'wishlist/'+ productId)
  }

  getwishlist():Observable<any>{
    return this.httpclient.get(enviroment.baseUrl +'wishlist')
  }
}
