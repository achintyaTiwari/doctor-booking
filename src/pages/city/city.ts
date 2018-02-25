import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HospitalPage } from '../hospital/hospital';
import { LedgerPage } from '../ledger/ledger';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
	ledger = LedgerPage;
  city:string= "Sultanpur";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(f:NgForm){
   this.navCtrl.push(HospitalPage,{city:f.value.city});
   console.log(f);
  }

}