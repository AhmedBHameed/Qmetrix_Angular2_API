import { Injectable } from '@angular/core';
import { FunctionsService } from './_functions/functions.service';

@Injectable()
export class RequestsService {
  settingsData : any;
  globalVariable: any= null;
  constructor(private funs: FunctionsService) {  }

  getCustomer(){
    return this.funs.makeRequest('api/1/customers', 'Get');
  }
  getSitesData(customerID:string){
    return this.funs.makeRequest( "api/1/customers/"+customerID+"/sites", 'Get');
  }
  sendNotification($CID, type, data){
    return this.funs.makeRequest("api/1/customers/"+$CID+"/cn-send"+type, "Post", data);
  }
  getSiteBluePrint($CID, $SID){
    return this.funs.makeRequest("api/1/customers/"+$CID+"/sites/"+$SID+"/blueprint", 'Get')
  }
  getTimeWindowWithRawValues($CID, $SID, query){
    return this.funs.makeRequest("api/1/customers/"+$CID+"/sites/"+$SID+"/histdata0?json="+JSON.stringify(query), 'Get');
  }

  lastMeasurements($CID, $SID, query){
    return this.funs.makeRequest("api//1/customers/"+$CID+"/sites/"+$SID+"/histdata0/youngest?json="+JSON.stringify(query), 'Get');
  }

}
