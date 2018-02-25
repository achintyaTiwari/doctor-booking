import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  doc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
     this.doc = this.navParams.get('data');
     console.log("data in patient page is:",this.doc);
  }

 

}
