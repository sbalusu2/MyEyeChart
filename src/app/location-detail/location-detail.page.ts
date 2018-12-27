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

 @Input() location: Location;

items: Observable<any>;

  constructor(private route: ActivatedRoute, private locationService: LocationServiceService, private db: AngularFireDatabase) { }

  ngOnInit(){
  	this.getLocation();
  }

  getLocation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("ID IS  " + id);
    this.items = this.db.object('locations/' + id).valueChanges();
    console.log("OIRTPOEIRTPOIER"  + this.items);
    this.items.subscribe(testerObj => {
      console.log("JLKASJDLKAJSDL: "  + testerObj.name);
    
    })
    this.locationService.getSpecificLocation(id).subscribe(location => this.location = location);
  }
}

