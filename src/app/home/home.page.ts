import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

items: Observable<any>;
show: string;
alsoshow: string;
email: string;

constructor(public authService: AuthService, private route: ActivatedRoute, private db: AngularFireDatabase) {

}



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
         		this.show = pet.email;
         		this.alsoshow = pet.name;
            }
          }
        });


}




}


 