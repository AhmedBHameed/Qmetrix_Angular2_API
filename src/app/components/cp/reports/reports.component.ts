import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { AuthService } from '../../../_services/auth.service';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var Chart:any, $:any, window:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [FunctionsService, RequestsService, AuthService]
})
export class ReportsComponent implements OnInit {
  data:any = null;
  
  showUnitsMeasurement:boolean = false;

  chart00ID:number;
  chart01ID:number;
  chart0Config:any;
  chart1Config:any;
  datasets00:any= [];
  
  startDate:any = window.moment().local();
  forPeriodeOf:number = -30;

  queryObj:any = {}
  
  constructor(private funs:FunctionsService ,private gds: GlobalDataService, private ar: ActivatedRoute, private router: Router, private req:RequestsService) { }
  
  ngOnInit() {
      if(typeof this.gds.objects_of_ids.customer_id != 'string' && typeof this.gds.objects_of_ids.site_id != 'string'){
        this.router.navigate([''])
      }else{
        this.prepareBluePrintForRequest();
      }      
  }

  prepareBluePrintForRequest(){
    let histDataX,ds=[],select = [];
    histDataX = this.gds.getFromQmetrixData("siteBluePrint/histdata0/!calc");
    for(let key in histDataX){
      select.push(key);
      this.datasets00.push( {"label":histDataX[key].title+'-'+histDataX[key].units,
                             "data":[null] } );
      ds.push({"label":histDataX[key].title+'-'+histDataX[key].units,
               "data":[null] });
    }
    this.queryObj["select"] = select;
    this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
    this.queryObj["until"] = "*";
    this.showUnitsMeasurement = true;
    this.chart0Config = {
      startShowUp: true,
      min: 0,
      max: 70,
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: ds
      },
      chartTitle: 'Data Analysis',
      YStepSize: 10,
      zoom: 'xy'
    }
     // this.chart1Config = {
        //   labels: ["January", "February", "March", "April", "May", "June", "July"],
        //   min: 0,
        //   max: 70,
        //   datasets: [{
        //     label: "Temprature-CH0",
        //     data: [12, 19, 1, 2, 7,8, 0]
        //     }, {
        //       label: "Power-CH1",
        //       data: [2 , 2, 2, 4, 3, 6, 10]
        //     }, {
        //       label: "Voltage-CH2",
        //       data: [21, 45, 23, 44, 56, 12, 5]
        //     }, {
        //       label: "Watt-CH3",
        //       data: [70, 20, 50, 10, 30, 5, 0]
        //     }],
        //   chartTitle: 'Temprature & Humidity measurement',
        //   YStepSize: 10,
        //   zoom: 'y'
      // }
    this.bringData();
  }

  bringData(){
    this.req.getTimeWindowWithRawValues(this.gds.objects_of_ids.customer_id, this.gds.objects_of_ids.site_id, this.queryObj ).subscribe(
      res=>{
        this.proccessData(res.json());
      },
      err=>{
        this.funs.notify({
          type: 'danger',
          icon: 'fa fa-exclamation-triangle',
          title: 'Errer',
          message: err.json().err
        });
      });
  }

  proccessData(dataSeries){
    this.stopChart00Iteration(null);
    this.gds.chartsObj[this.chart00ID].reset();
    let labels;
    if(dataSeries.length > 0){         // ATENTION PLEASE
      let flattedDate = this.funs.flatten(dataSeries);
      this.gds.chartsObj[this.chart00ID].data.labels = flattedDate[0];
      for(let i =0 ; i < this.gds.chartsObj[this.chart00ID].data.datasets.length; i++){
        this.gds.chartsObj[this.chart00ID].data.datasets[i].data = flattedDate[1][i];
      }
      this.gds.chartsObj[this.chart00ID].update();
    }else{
      this.funs.notify({
        type: 'danger',
        icon: 'fa fa-exclamation-triangle',
        title: 'Errer',
        message: "No data available at moment!"
      });
    }
  }






  onStartDateOfDataSeries(date){
    this.startDate = date;
    this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
    this.queryObj["until"] = this.funs.getTimeDifferenceInUTC(this.startDate);
    this.bringData();
  }
  
  onPeriodeOf(periode){
    this.forPeriodeOf = parseInt(periode, 10);
    this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
    this.queryObj["until"] = this.funs.getTimeDifferenceInUTC(this.startDate);
    console.log(this.queryObj);
    this.bringData();
    // this.gds.chartsObj[this.chart00ID].render(1000, false);

    // moment().startOf('week').toDate(); // start of the week
    // moment().endOf('week').toDate(); // end of the week
    // moment().local().toDate(); // current time
    // moment().subtract(1, 'days').startOf('day').toString(); // start of yesterday
    // moment().subtract(1, 'days').endOf('day').toString(); // end of yesterday
  }

  setChart00ID(id){
    this.chart00ID = id;
    // this.bringData();    
  }
  setChart01ID(id){
    this.chart01ID = id;    
    this.bringData();
  }

  

  updateChart00(label, data){
    console.log(this.gds.getFromQmetrixData());
    if(!this.gds.chartsObj[this.chart00ID + '-Iteration']){
      this.gds.chartsObj[this.chart00ID + '-Iteration'] = setInterval(() => {
        this.gds.chartsObj[this.chart00ID].data.labels.push(Math.round(Math.random() * 100).toString());
        for (let i = 0; i < this.gds.chartsObj[this.chart00ID].data.datasets.length; i++) {
          this.gds.chartsObj[this.chart00ID].data.datasets[i].data.push(Math.round(Math.random() * 60));
          this.gds.chartsObj[this.chart00ID].data.datasets[i].data.splice(0, 1);
        }
        this.gds.chartsObj[this.chart00ID].data.labels.splice(0, 1)
        this.gds.chartsObj[this.chart00ID].update();
      }, 2000);
    }else{
      console.log("00 Iteration called again!!!");
    }
    
  }
  updateChart01(label, data) {
    if(!this.gds.chartsObj[this.chart01ID + '-Iteration']){
      this.gds.chartsObj[this.chart01ID + '-Iteration'] = setInterval(() => {
        this.gds.chartsObj[this.chart01ID].data.labels.push(Math.round(Math.random() * 100).toString());
        for (let i = 0; i < this.gds.chartsObj[this.chart01ID].data.datasets.length; i++) {
          this.gds.chartsObj[this.chart01ID].data.datasets[i].data.push(Math.round(Math.random() * 60));
          this.gds.chartsObj[this.chart01ID].data.datasets[i].data.splice(0, 1);
        }
        this.gds.chartsObj[this.chart01ID].data.labels.splice(0, 1)
        this.gds.chartsObj[this.chart01ID].update();
      }, 2000);
    }else{
      console.log("01 Iteration called again!!!");
    }
  }


  stopChart00Iteration(ev){
    if(!this.gds.chartsObj[this.chart00ID+'-Iteration']){
      clearInterval(this.gds.chartsObj[this.chart00ID+'-Iteration']);
      this.gds.chartsObj[this.chart00ID + '-Iteration'] = null;
    }
  }
  stopChart01Iteration(ev){
    if(!this.gds.chartsObj[this.chart01ID+'-Iteration']){
      clearInterval(this.gds.chartsObj[this.chart01ID+'-Iteration']);
      this.gds.chartsObj[this.chart01ID + '-Iteration'] = null;
    }
  }
  
}





