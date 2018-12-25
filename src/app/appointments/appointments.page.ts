import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '../location';
import { LOCATIONS } from '../list-locations';
import { LocationServiceService } from '../location-service.service';
import { Router } from '@angular/router';


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
  
  constructor(private router: Router, private navCtrl: NavController, private locationService: LocationServiceService) { 

    locationService.getRandomLocation().subscribe(result => {
    this.pie = result;
    });
  }

  ngOnInit(){
    console.log('ionViewDidLoad ListLocationPage');
    this.locationService.getLocations().subscribe(results => {
    this.locations = results;
    });
  }


  getItems(event){
    console.log(event.target.value);
  }

  onSelect(location: Location): void {
  }

  locationSelected(location: Location){
    console.log('location', location);
    console.log(location.id)    
  }


}
