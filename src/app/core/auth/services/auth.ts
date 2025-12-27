import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http:HttpClient ){}
  private router = inject(Router)
  signup(data:any) : Observable <any> {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }
  
  login(data:any) :Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
  }

  saveToken(token:string):void{
    localStorage.setItem('savetoken',token)
  }

  savename(name:string):void{
    localStorage.setItem('name',name)
  }
  
  gettoken(){
    return localStorage.getItem('savetoken')
  }

  islogged():boolean{
    return !!localStorage.getItem('savetoken')
  }

  logout(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }
}
