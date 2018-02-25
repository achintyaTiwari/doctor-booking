import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddNewPatient } from '../../modal/add-new-patient/AddNewPatient';
import { EditPatient } from '../../modal/edit-patient/EditPatient';

@Component({
  selector: 'page-ledger',
  templateUrl: 'ledger.html'
})
export class LedgerPage {
	reason=["No reason specified","Cancelled by patient","Cancelled by doctor","Doctor unavailable","Patient resheduled"]

	ledger = [
        {
            name: "Anurag Tiwari",
            age: 20,
            gender: "M",
            status: true,
            active: true,
            reasonOfCancellation: 0
        },
        {
            name: "Achintya Tiwari",
            age: 22,
            gender: "M",
        		status: true,
            active: true,     		
            reasonOfCancellation: 0
        },
        {
            name: "Rajesh Tripathi",
            age: 24,
            gender: "M",
        		status: false,
        		active: true,
            reasonOfCancellation: 0
        }

    ]


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

	addPatient() {
		
		let contactModal = this.modalCtrl.create(AddNewPatient);
		contactModal.onDidDismiss( data => {
			if (data){
			this.ledger.push(data);
			} 
		});
   	contactModal.present();


	}

	editPatient(index) {

		let contactModal = this.modalCtrl.create(EditPatient,(this.ledger[index]));
		contactModal.onDidDismiss( data => {
			if (data){
				this.ledger[index] = data;
			}
		});
   	contactModal.present();


	}

}
