import { Inject, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = async(route, state) => {
  const router: Router = inject(Router);
  const userAuth = inject(Auth)
  const userIsLoggedIn = userAuth.currentUser;
  console.log(userIsLoggedIn);
  if(!userIsLoggedIn) router.navigate(['/sign-in']);
  return userIsLoggedIn ? true : false;
};
