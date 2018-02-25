import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LedgerPage } from '../pages/ledger/ledger';
import { AddNewPatient } from '../modal/add-new-patient/AddNewPatient';
import { EditPatient } from '../modal/edit-patient/EditPatient';
import { UserService } from '../services/doctor-services/services.hospital';
import { CityPage } from '../pages/city/city';
import { HospitalPage } from '../pages/hospital/hospital';
import { DoctorPage } from '../pages/doctor/doctor';
import { PatientPage } from '../pages/patient/patient';


@NgModule({
  declarations: [
    MyApp,
    AddNewPatient,
    EditPatient,
    CityPage,
    HospitalPage,
    DoctorPage,
    PatientPage,
    LedgerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddNewPatient,
    EditPatient,
    CityPage,
    HospitalPage,
    DoctorPage,
    PatientPage,
    LedgerPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
