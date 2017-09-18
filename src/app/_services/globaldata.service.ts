import { Injectable } from '@angular/core';

@Injectable()
export class GlobalDataService {
  private qmetrixData:any = {};
  public objects_of_ids:any = {
    customer_id: null,
    site_id: null
  };
  public chartsObj:any = {}
  constructor() { }
  
  pushToQmetrixData(key:string, data:any){
    this.qmetrixData[key] = data;
  }
  getFromQmetrixData(arrgument:any=null, theObject:any=this.qmetrixData){
    if(arrgument == null || arrgument == '') return theObject;
    let result = null,obj={},
    args = arrgument.split('/');
    if(args[0] == ""){
        return theObject;
    }
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            if(Object.keys(theObject).indexOf(args[0]) > -1){
              args.splice(0,1);
              result = this.getFromQmetrixData(args.join('/'), theObject[i] ) ;
            }else{
              result = this.getFromQmetrixData(args.join('/'), theObject[i] );
            }
        }
    }else if(args[0] && args[0].charAt(0) == '!'){
      // debugger;
      let newArg = args[0].slice(1);
      for(let key in theObject){
        if(!~key.indexOf(newArg)){
          obj[key] = theObject[key];
        }
      }
      return obj;
    }else{
      for(let key in theObject){
        if(key == args[0]){
            args.splice(0,1);
            result = this.getFromQmetrixData(args.join('/'), theObject[key] ) ;
        }
      }
    }
    return result;
  }  
  
}
