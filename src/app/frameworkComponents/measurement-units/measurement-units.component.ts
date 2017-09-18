import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RequestsService } from '../../_services/requests.service';
import { GlobalDataService } from '../../_services/globaldata.service';
import { FunctionsService } from '../../_services/_functions/functions.service';

declare var $:any,window:any;
@Component({
  selector: 'app-measurement-units',
  templateUrl: './measurement-units.component.html',
  styleUrls: ['./measurement-units.component.css'],
  providers: [FunctionsService, RequestsService]
})
export class MeasurementUnitsComponent implements OnInit, AfterViewInit, OnDestroy {
  unitID:Array<string> = [];
  canvas: Array<any> = [];
  loop:any;
  @Input() datasets:any;
  @Input() querySelect:any;
  
  constructor(private req: RequestsService, private gds:GlobalDataService, private funs:FunctionsService) { }

  uuidv4() {
    return 'xxxxxyxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  ngOnInit() { }

  ngAfterViewInit(){
    let units='';
    for(let key in this.datasets){
      this.unitID.push(this.uuidv4());
      units +=`
      <div class="unitsStyle unit-`+this.unitID[this.unitID.length-1]+`-container">
        <div class="caption-header">
            <small><strong>`+this.datasets[key].label+`</strong></small>
        </div>
        <canvas id="unit-`+this.unitID[this.unitID.length-1]+`"></canvas>
        <div class="caption-footer">
            <small class="pull-right"><strong>Timestamp</strong></small>
        </div>
      </div>`
    }
    $('.units-wrapper').append(
      $(units));
    this.requestPer5Minutes();
    this.loop = setInterval(()=>{
      this.requestPer5Minutes();
    }, 60000);
    
  }

  ngOnDestroy(){
    clearInterval(this.loop);
    for(let i=0; i<this.datasets.length; i++){
      this.removeCanvas(i);
    }
  }
  removeCanvas(index){    
      let ctx = this.canvas[index].getContext('2d');
      ctx.clearRect(0, 0, this.canvas[index].width, this.canvas[index].height);
  }

  requestPer5Minutes(){
    this.req.lastMeasurements(this.gds.objects_of_ids.customer_id, this.gds.objects_of_ids.site_id, {"select": this.querySelect}).subscribe(
      (res)=>{
        let lastMeas = this.funs.flatten(res.json());
        for(let i=0; i<lastMeas[1].length; i++){
          if(this.canvas[i] != undefined){
            this.removeCanvas(i);
          }
          this.draw( i, lastMeas[0], lastMeas[1][i] );
        }        
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

  draw(index, date, data){ 
      this.canvas.push( $('#unit-'+this.unitID[index]).get(0) );
      let ctx = (this.canvas[index]).getContext('2d');
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle';
      ctx.fillStyle = "#FFF";
      ctx.fillRect(0, 0, this.canvas[index].width, this.canvas[index].height);
      ctx.font = "55px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(data, this.canvas[index].width/2, this.canvas[index].height/2);
      $('.unit-'+this.unitID[index]+'-container .caption-footer small strong').text(date);
  }

}
