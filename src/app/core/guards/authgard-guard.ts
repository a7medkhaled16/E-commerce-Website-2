import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../auth/services/auth';

export const authgardGuard: CanActivateFn = (route, state) => {
  const authservice = inject(Auth)
  const router = inject(Router)

  if(authservice.islogged()){
    return true
  }
  router.navigate(['/login'])
  return false;
};
