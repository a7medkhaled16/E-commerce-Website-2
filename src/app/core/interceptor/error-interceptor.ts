import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService)

  return next(req).pipe(catchError((err)=>{
    if(req.url.includes('auth')){
      toastr.show(err.error.message)
    }else{
      toastr.show(err.message)
    }
    
    return throwError(()=>err)
  }))
};
