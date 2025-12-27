import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { Auth } from '../../../core/auth/services/auth';

@Injectable({
  providedIn: 'root',
})
export class Orederservice {
  constructor(private httpclient:HttpClient, private auth:Auth){}

  checkout(cartId:string,shippingAddress:{
        details: string,
        phone: string,
        city: string
        }):Observable<any>{
    const returnUrl="?url=http://localhost:4200"
    return this.httpclient.post(enviroment.baseUrl +'orders/checkout-session/'+cartId+returnUrl,{
      shippingAddress
    },{
       headers:{
              token:this.auth.gettoken()!
      }
    })
  }
}
