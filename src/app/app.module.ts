import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { APP_ROUTES_PROVIDER } from './app.routes';

import { GlobalDataService } from './_services/globaldata.service';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/reports/reports.component';
import { Error404Component } from './components/error404/error404.component';
import { SendnotificationComponent } from './components/cp/sendnotification/sendnotification.component';
import { ManagementComponent } from './components/cp/management/management.component';

// Framework Items
import { TagsinputComponent } from './frameworkComponents/tagsinput/tagsinput.component';
import { TinymceComponent } from './frameworkComponents/tinymce/tinymce.component';
import { ChartsComponent } from './frameworkComponents/charts/charts.component';
import { DatetimepickerComponent } from './frameworkComponents/datetimepicker/datetimepicker.component';
import { MeasurementUnitsComponent } from './frameworkComponents/measurement-units/measurement-units.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    CpComponent,
    ReportsComponent,
    Error404Component,
    SendnotificationComponent,
    TagsinputComponent,
    TinymceComponent,
    ChartsComponent,
    DatetimepickerComponent,
    ManagementComponent,
    MeasurementUnitsComponent
  ],
  imports: [
    APP_ROUTES_PROVIDER,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ GlobalDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
