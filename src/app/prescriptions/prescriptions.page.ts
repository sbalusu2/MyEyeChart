import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.page.html',
  styleUrls: ['./prescriptions.page.scss'],
})
export class PrescriptionsPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
