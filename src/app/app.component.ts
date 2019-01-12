import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
items: Observable<any>;
example: Observable<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private db: AngularFireDatabase
  ){
    this.items = db.object('PatientInfo').valueChanges();
    this.items.subscribe(data=>{
         console.log("overall data contains" + data);
         for (let pet of data) {
            console.log("cat" + pet.Name); // "Cat", "Dog", "Hamster"
          }
        });
    console.log("TYPE OF THE OBJECTS ARE: " + this.items); 
    this.initializeApp();

  }


    getItems(){
    this.items = this.db.object('locations').valueChanges();
    console.log("TYPE OF THE OBJECTS ARE: " + typeof this.items.subscribe(data=>{
         console.log(data);
         for (let pet of data) {
            console.log(pet.name); // "Cat", "Dog", "Hamster"
          }
        }));
      }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  close(){
    this.menu.close();
  }
}
