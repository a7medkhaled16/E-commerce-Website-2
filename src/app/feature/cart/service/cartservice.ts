import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../../../environment/environment';
import { Auth } from '../../../core/auth/services/auth';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  constructor(private httpclient : HttpClient){}
  private authservice = inject(Auth)

  cartCounter:BehaviorSubject <number>= new BehaviorSubject<number>(0) 

  Addtocart(productId:string):Observable<any>{
    return this.httpclient.post(enviroment.baseUrl +'cart',{
      productId
    })
  }

  UpdateitemQun(productId:string , count: number):Observable<any>{
    return this.httpclient.put(enviroment.baseUrl +'cart/' + productId,{
      count
    })
  }

  getLoggedcart():Observable<any>{
    return this.httpclient.get(enviroment.baseUrl +'cart')
  }

  removeitem(productId:string):Observable<any>{
    return this.httpclient.delete(enviroment.baseUrl +'cart/' + productId)
  }

  
  clearcart():Observable<any>{
    return this.httpclient.delete(enviroment.baseUrl +'cart')
  }
}
