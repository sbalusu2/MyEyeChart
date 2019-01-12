import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '../location';
import { LocationServiceService } from '../location-service.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';


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
  storenumber: number;
  patientappointmentid: number;
  appointmentdate: string;
  appointmentstartdatetime: string;
  appointmentenddatetime: string;
  email: string;


  constructor(private router: Router, private navCtrl: NavController, private locationService: LocationServiceService, private db: AngularFireDatabase, public authService: AuthService, private route: ActivatedRoute
) { 

    locationService.getRandomLocation().subscribe(result => {
    this.pie = result;
    });
 
  }

  ngOnInit(){
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
            this.patientappointmentid = pet.patientappointmentid;
            this.appointmentdate = pet.appointmentdate;
            this.appointmentstartdatetime =  pet.appointmentstartdatetime;
            this.appointmentenddatetime =  pet.appointmentenddatetime;
            this.storenumber = pet.storenumber;
            }
          }
        });

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