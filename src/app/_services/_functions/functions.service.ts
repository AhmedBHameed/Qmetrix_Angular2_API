import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request, URLSearchParams  } from '@angular/http';
import { URL } from './backendurl';

declare var $:any,window:any;
@Injectable()
export class FunctionsService {
  public url = URL;

  constructor(private http: Http) {}
  
  notify(data){
      $.notify({
      // options
      icon: data.icon,
      title: "<b>"+data.title+"</b>",
      message: data.message,
      url: data.url || null,
      target: data.target || null
    },{
      // settings
      element: 'body',
      position: null,
      type: data.type,
      allow_dismiss: true,
      newest_on_top: false,
      showProgressbar: false,
      placement: {
        from: "bottom",
        align: "left"
      },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 5000,
      timer: 1000,
      url_target: '_blank',
      mouse_over: 'pause',
      animate: {
        enter: 'animated fadeInUp',
        exit: 'animated fadeOutDown'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'class',
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span></br> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>' 
    });
  }

  delay(callback, time:number = 1000){
    if(typeof callback == 'function'){
      window.setTimeout(callback, time);
    }else{
      throw new Error('Delay parameters must be ( Callback function, number of Delay in ms)');
    }
  };

  makeRequest(page = null, type = null, data = null) {
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('json', data);
    let header = new Headers(),opt;
    header.append("Authorization", "Basic "+this.getToken() );
    
    if (type == "Post") {
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/json");
      opt = new RequestOptions({
        headers: header,
        url: this.url + page,
        method: RequestMethod[type],
        body: JSON.stringify(data)
        // search: params
      });
    }
    if (type == "Get") {
      header.append("Accept", "application/json");
      opt = new RequestOptions({
        headers: header,
        url: this.url + page,
        method: RequestMethod[type]
      });
    }
    return this.http.request(new Request(opt));
  }
  // private makeRequestJsonp(page=null, data=null){ // this is jsonp request
  //     let header = new Headers(), opt;
  //     header.append("Accept", "application/json");
  //   header.append('X-CSRF-Token', localStorage.getItem('token'));
  //       opt = new RequestOptions({headers: header,
  //                                       url: this.url+page+'/cb=JSONP_CALLBACK',
  //                                       method: RequestMethod.Get,
  //                                     });
  //     return this.jsonp.request(new Request(opt));
  //   }
  //   test(){
  //     return this.makeRequestJsonp('adcanaccesstwo', {"token":localStorage.getItem('token')});
  // }
  getToken():any {
    let token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
    if(typeof token == 'string'){
        return token;
      }else{
        throw new Error('Invalid token!');
      }
  }

  chooseImage(e, def) { // e is the input type="file" | def default vaalue;
    let base64 = null;
    if (e.target.files && e.target.files[0] && e.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      return new Promise((resolve, reject) => {
        reader.onload = (e) => {
          base64 = e.target['result'];
          resolve(base64);
        };
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve(def);
      });
    }
  }

  trimData(data, options){
    let optArray;
    if (typeof options == 'object') {
      optArray = Object.keys(options)
    };
    if (Array.isArray(data)) {
      for (let index in data) {
        for (let item in data[index]) {
          if (optArray.indexOf(item) > -1) {
            data[index][item] = data[index][item].substr(0, options[item])+' ...';
          } else {
            data[index][item] = data[index][item];
          }
        }
      }
    } else {
      return data;
    }
    console.log(data);
    
    return data;
    
  }

  getIndex(arrayObject:any, ofRow:any){
    if(typeof arrayObject != 'object'){
      throw new Error('Invalid object. search index should be in object only');
    }
    for(let i =0; i< arrayObject.length; i++){
      for(let key in arrayObject[i]){
        if(!ofRow.hasOwnProperty(key)) continue;
        if(arrayObject[i][key] == ofRow[key]){
          return i;
        }
      }
    }
    return null;
  }

  getTimeDifferenceInUTC(dateNow, timeDiff=null, unit='minutes'){
    if(timeDiff){
      return window.moment(dateNow).subtract(timeDiff*-1, unit).utc().format("YYYYMMDDHHmmssSSS");
    }else{
      return window.moment(dateNow).utc().format("YYYYMMDDHHmmssSSS");
    }
  }
  
  seperateUTCTime(time){
    if(!time){
        throw new Error("Invalid UTC time from server");
    }
    let yyyy = time.substr(0,4),
        mm = time.substr(4,2),
        dd = time.substr(6,2),
        HH = time.substr(8,2),
        MM = time.substr(10,2),
        SS = time.substr(12,2),
        mill = time.substr(14);
    return (window.moment.utc( yyyy+'-'+mm+'-'+dd+' '+HH+':'+MM+':'+SS+':'+mill ,'YYYY-MM-DD HH:mm:ss SSS') )
                .local().format('DD-MMM-YY HH:mm:ss');
  }

  flatten(arr) {
    let newArr = [],allDates=[];
    if(Array.isArray(arr)){
      let len = arr[0].length;
      for(let i=0; i<len; i++){
        if(i != 0){
          newArr[i-1] = [];
        }
        for(let y=0; y<arr.length; y++){
          if(i == 0){
            allDates.push(this.seperateUTCTime(arr[y][i]));
          }else{
            newArr[i-1].push(arr[y][i]);
          }
        }
      }
    }
    return [allDates, newArr];
  }


}
