import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../auth/services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const auth= inject(Auth)
  if(req.url.includes('cart') || req.url.includes('order') || req.url.includes('wishlist')){
     req=req.clone({
    setHeaders:{
      token:auth.gettoken() || ''
    }
  })
  }
  return next(req);
};
