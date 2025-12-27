import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
   constructor(private httpclient : HttpClient){}

  getall(): Observable <any> {
  return  this.httpclient.get('https://dummyjson.com/products')
  }

  getallpros(): Observable <any> {
  return  this.httpclient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  getproductdetails(id:string | null) : Observable <any>{
    return this.httpclient.get('https://ecommerce.routemisr.com/api/v1/products' + `/${id}`)
  }

}
