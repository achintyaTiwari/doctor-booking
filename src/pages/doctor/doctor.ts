import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/doctor-services/services.hospital';
import { PatientPage } from '../patient/patient';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
   targetHospital:any;
   doctorList:any;
   hospital:string;
   constructor(public navCtrl: NavController, public navParams: NavParams,private user: UserService) {
  	this.targetHospital = this.navParams.get('data');
    this.hospital = this.targetHospital.hospital;
  	console.log("Target Hospital:",(this.targetHospital.hospital));
  	console.log("Target City:",(this.targetHospital.city));
  	this.doctorList = this.user.getalldoctors(this.targetHospital.city,this.targetHospital.hospital);
    console.log("Doctor's List",this.doctorList);


}

 book(i:number){
       this.navCtrl.push(PatientPage,{data:this.doctorList[i].name});
 }

}
