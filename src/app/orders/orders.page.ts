import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

items: Observable<any>;
orderid: number;
orderdate: string;
ordertime: string;
storenumber: number;
email: string;


constructor(public authService: AuthService, private route: ActivatedRoute, private db: AngularFireDatabase){}


  ngOnInit() {

    this.email = this.route.snapshot.paramMap.get('email');
    console.log("YO ID IS: " + this.email);
    this.items = this.db.object('PatientInfo').valueChanges();
    console.log("OIRTPOEIRTPOIER"  + this.items);
    console.log(JSON.stringify(this.items));
    console.log("Length "+ Object.keys(this.items).length); 
    this.items.subscribe(data=>{
         console.log("overall data contains" + data);
         for (let pet of data) {
         	console.log(pet.email);
         	if(pet.email === this.email){
         		console.log("cat" + pet.name); // "Cat", "Dog", "Hamster"
         		this.orderid = pet.orderid;
         		this.orderdate = pet.orderdate;
         		this.ordertime =  pet.ordertime;
         		this.storenumber = pet.storenumber;
            }
          }
        });
  }

}
