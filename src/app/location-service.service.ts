import { Injectable } from '@angular/core';
import { Location } from './location';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class LocationServiceService {


locations: Location[];

  constructor() { 
  	this.locations = [
	  { id: 0, name: 'Boca Raton' },
	  { id: 1, name: 'Coral Springs' },
	  { id: 2, name: 'Cutler Bay' },
	  { id: 3, name: 'Florida City' },
	  { id: 4, name: 'Fort Lauderdale' },
	  { id: 5, name: 'Gainesville' },
	  { id: 6, name: 'Hialeah' },
	  { id: 7, name: 'Hollywood East' },
	  { id: 8, name: 'Hollywood West' },
	  { id: 9, name: 'Jacksonville' },
	  { id: 10, name: 'Jupiter' },
	  { id: 11, name: 'Kendall' },
	  { id: 12, name: 'Lauderhill' },
	  { id: 13, name: 'Little Havana' },
	  { id: 14, name: 'Miami Lakes' },
	  { id: 15, name: 'North Miami Beach' },
	  { id: 16, name: 'Okeechobee' },
	  { id: 17, name: 'Orange Park' },
	  { id: 18, name: 'Orlando' },
	  { id: 19, name: 'Palm Beach Gardens' },
	  { id: 20, name: 'Palm Springs' },
	  { id: 21, name: 'Pembroke Pines' },
	  { id: 22, name: 'Pensacola' },
	  { id: 23, name: 'River City Marketplace' },
	  { id: 24, name: 'Stuart' },
	  { id: 25, name: 'Tallahassee' },
	  { id: 26, name: 'West Palm Beach' },
	  { id: 27, name: 'Westchester'}
  	];
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
  				let filteredLocations = allLocations.filter(l => l.name.toLowerCase().indexOf(searchText) > -1);
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
