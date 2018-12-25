import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LocationServiceService } from '../location-service.service';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit {

 @Input() location: Location;

  constructor(private route: ActivatedRoute, private locationService: LocationServiceService) { }

  ngOnInit(){
  	this.getLocation();
  }

  getLocation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("ID IS  " + id);
    this.locationService.getSpecificLocation(id).subscribe(location => this.location = location);
  }


}
