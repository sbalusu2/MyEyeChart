import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '../location';
import { LocationServiceService } from '../location-service.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  pie: Location;
  location: Location;
  locations: Location[];
  queryText: string; 
  items: Observable<any>;
  tester: Observable<any>;
  testingString: string;

  constructor(private router: Router, private navCtrl: NavController, private locationService: LocationServiceService, private db: AngularFireDatabase
) { 

    locationService.getRandomLocation().subscribe(result => {
    this.pie = result;
    });
 
  }

  ngOnInit(){
    console.log('ionViewDidLoad ListLocationPage');
    this.locationService.getLocations().subscribe(results => {
    this.locations = results;
    });

    this.tester = this.db.object('locations/1').valueChanges();
    console.log("HIASHIAHS"  + this.tester);
    this.tester.subscribe(testerObj => {
      console.log("SJDJSDAJ: "  + testerObj.name);
    })
    this.items = this.db.object('locations').valueChanges();
    this.items.subscribe(dbResults => {
    for (let index of dbResults){
        console.log("dbResults: " + index.name);
        console.log("type of dbResults: " + typeof index.name);
          }
        })
  }

  getItems(event){
    this.locationService.getFilteredLocationsFB(event.target.value).subscribe(filteredLocations => {
      console.log("this is what is in filteredLocations: " + filteredLocations);
      console.log(typeof filteredLocations);
      console.log(filteredLocations);
      console.log(JSON.stringify(filteredLocations));
      console.log(filteredLocations[0].id);
      this.items = filteredLocations;
      console.log(this.items);
    });
    

  }

   getItemsB(event){
    this.locationService.getFilteredLocations(event.target.value).subscribe(filteredLocations => {
      console.log(filteredLocations);
      console.log(this.locations);
      this.locations = filteredLocations;
      console.log(this.locations);
    });

}

  onSelect(location: Location): void {
  }

  locationSelected(location: Location){
    console.log('location', location);
    console.log(location.id)    
  }

}