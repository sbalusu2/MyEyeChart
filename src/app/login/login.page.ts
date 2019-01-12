import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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


  constructor(private fireAuth: AngularFireAuth,  private authService: AuthService, private router: Router, private toastCtrl: ToastController) { }

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
        console.log("EMAIL BEFORE SENDING IS: " + user.email);
        this.router.navigate(['home', {email: user.email}]);

  }
  }
  catch(e){
  console.log(e);
  const toast = await this.toastCtrl.create({
    message: 'Invalid email or password.',
    duration: 3000,
    position: 'bottom'
});
toast.present();
   
    }
  }


    register(){
      this.router.navigate(['register']);
    }



}
