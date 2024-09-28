import { Component, OnInit } from '@angular/core';
import { GoogleSsoDirective } from '../../directives/google-sso/google-sso.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [GoogleSsoDirective, FormsModule, ReactiveFormsModule, AngularFireModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{

  email!: string;
  password!: string;

  authUser: any;

  constructor(private auth: Auth, private router: Router){}

  ngOnInit(): void {
  }

  async signIn(){
    const userCredential = await signInWithEmailAndPassword(this.auth,this.email, this.password);
    console.log(userCredential);
    if(userCredential){
      this.router.navigate(['/'])
    }
  }

}
