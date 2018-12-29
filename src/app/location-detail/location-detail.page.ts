import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LocationServiceService } from '../location-service.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit {

 items: Observable<any>;
 name:string;
 state:string;
 stateAddress:string;
 streetAddress:string;
 phone:string;


  constructor(private route: ActivatedRoute, private locationService: LocationServiceService, private db: AngularFireDatabase) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("YO ID IS: " + id);
    this.items = this.db.object('locations/' + id).valueChanges();
    console.log("OIRTPOEIRTPOIER"  + this.items);
    console.log("Length "+ Object.keys(this.items).length); 
    this.items.subscribe(testerObj => {
      this.name = testerObj.name;
      this.state = testerObj.state;
      this.stateAddress = testerObj.stateAddress;
      this.streetAddress = testerObj.streetAddress;
      this.streetAddress = testerObj.streetAddress;
      this.phone = testerObj.phone;
      console.log("lolololololo: "  + testerObj.name);
      console.log("lolololololo: "  + testerObj.state);
    
    })
  }

}

