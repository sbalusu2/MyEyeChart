import { Injectable } from '@angular/core';
import { Location } from './location';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})

export class LocationServiceService {


locations: Location[];
items: Observable<any>;

  constructor(private db: AngularFireDatabase) { 
  	this.locations = [
	  { id: 0, name: 'Mobile', state: 'Alabama', streetAddress: '3653 Airport Blvd, Suite C', stateAddress: 'Mobile, AL 36608', phone: '(251)207-3505'},
	  { id: 1, name: 'Anchorage', state: 'Alaska', streetAddress: '8300 Homer Dr', stateAddress: 'Anchorage, AK 99518', phone: '(907)885-3232'},
	  { id: 2, name: 'Little Rock', state: 'Arkansas', streetAddress: '112 S University Ave', stateAddress: 'Little Rock, AR 72205', phone: '(501)481-1333'},

	  { id: 1, name: 'Anchorage', state: 'Alaska', streetAddress: '8300 Homer Dr', stateAddress: 'Anchorage, AK 99518', phone: '(907)885-3232'}  
	
  	];
  }


          getValueFromObservable(){
        this.items = this.db.object('locations').valueChanges();
        console.log("trying something here: " + this.items.take(1).toPromise());
        return this.items
           .take(1)
           .toPromise()   
    }


  	getLocations() :Observable<Location[]> {
  		return Observable.create(observable => {
  		observable.next(this.locations);
  		observable.complete();
  		})
  	}

  	getSpecificLocation(id: number) :Observable<Location>{
  	  	return Observable.create(observable => {
  		observable.next(this.locations[id]);
  		observable.complete();
  		})
  	}

  	getFilteredLocations(searchText: string): Observable<Location[]>{
  		return Observable.create(observable => {
  			this.getLocations().subscribe(allLocations => {
  				let filteredLocations = allLocations.filter(l => l.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  				observable.next(filteredLocations);
  				observable.complete();
  		})
  		})
  	}


  	getRandomLocation() :Observable<Location> {
  		return Observable.create(observable => {
  		observable.next(this.locations[1]);
  		observable.complete();
  		})
  	}

}
