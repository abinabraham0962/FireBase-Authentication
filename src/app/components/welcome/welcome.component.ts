import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  authUser = inject(Auth);
  router = inject(Router)

  logout(){
    console.log("clicked")
    const signedOut = this.authUser.signOut().then( () =>{ console.log("signned out");
      this.router.navigate(['/sign-in'])});
    console.log(signedOut);
  }

}
