import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Homeservice {
  constructor(private httpclient : HttpClient){}

  getall(): Observable<any> {
  return  this.httpclient.get('https://dummyjson.com/products')
  }
}
