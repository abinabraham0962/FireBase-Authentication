import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './route-guard/auth-guard/auth-guard.guard';

export const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent,
    canActivate: [authGuard],
  },
  {
    path:'sign-in',
    component:SignInComponent
  }
];
