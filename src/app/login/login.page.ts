import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {User} from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

user = {} as User;


  constructor(private fireAuth: AngularFireAuth,  private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


      signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['home'])
        })
      .catch((err) => console.log(err));
    }

      signInWithEmail() {
      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['home']);
        })
        .catch((err) => console.log('error: ' + err));
    }

     async login(user: User){
  try{ 
  const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);

  if(info){
        await this.router.navigate(['home']);

  }
  }
  catch(e){
  console.error(e);
  }
  }

    register(){
      this.router.navigate(['register']);
    }


}
