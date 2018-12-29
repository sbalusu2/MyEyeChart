import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	user = {
		email: '',
		password: ''
			};

  constructor(private authService: AuthService, private router: Router) { }

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

}
