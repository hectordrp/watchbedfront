import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WatchbedFront';


  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBo1cqkSDB_xlro5QfG1LUybkVtcrLOwdU',
      authDomain: 'watchbed.firebaseapp.com'
    });
  }
}
