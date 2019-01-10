import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

user = {} as User;
public exists = false;
public DNE = false;
public nextButton = true;



  constructor(private fireAuth:AngularFireAuth, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async register(user: User) {
     try {
       const result = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
       .then(res => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        this.router.navigate(['login']);
       });
     }
  catch(e){
    console.log(e);
    if(e.message === 'createUserWithEmailAndPassword failed: Second argument "password" must be a valid string.')
    {   
        console.log("inside the if loop");
        const toast = await this.toastCtrl.create({
        message: "Password required!",
        duration: 3000,
        position: 'bottom'
                                                  });
      toast.present();
    }
    else{
          console.log("ELSE");
          const toast = await this.toastCtrl.create({
          message: e.message,
          duration: 3000,
          position: 'bottom'
                                                   });
          toast.present();
    }
  }
   }

   async next(user: User){
   try {
    const attempt = await this.fireAuth.auth.fetchSignInMethodsForEmail(user.email);
    console.log("this is what attempt is: " + attempt);
    if(attempt.length > 0){
      console.log("EMAIL EXISTS ALREADY");
      this.nextButton = false;
      this.exists = true;


    }
    else{
      console.log("NO EMAIL EXISTS");
      this.nextButton = false;
      this.DNE = true;
    }
  }
  catch(e){
    console.log(e);
    const toast = await this.toastCtrl.create({
    message: e.message,
    duration: 3000,
    position: 'bottom'
                                             });
    toast.present();
    }
  }    
}
