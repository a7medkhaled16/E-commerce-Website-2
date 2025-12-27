import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../auth/services/auth';

export const isloggedGuard: CanActivateFn = (route, state) => {
  const authservice = inject(Auth)
  const router = inject(Router)

  if(authservice.islogged()){
  router.navigate(['/home'])
    return false
  }
  return true;
};
