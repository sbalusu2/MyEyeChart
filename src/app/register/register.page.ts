import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

user = {} as User;



  constructor(private fireAuth:AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  async register(user: User){
  try{ 
  const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

  if(info){
  	    this.router.navigate(['login']);

  }
  }
  catch(e){
  console.error(e);
  }
  }


}
