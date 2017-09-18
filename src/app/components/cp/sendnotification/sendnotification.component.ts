import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsService , ValidatorsService } from '../../../_services/_functions/forms';
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var $: any;
@Component({
  selector: 'app-sendnotification',
  templateUrl: './sendnotification.component.html',
  styleUrls: ['./sendnotification.component.css'],
  providers: [ FunctionsService, RequestsService, FormsService ]
})
export class SendnotificationComponent implements OnInit {
  type = 'sms';
  classname = 'form-control';
  id='to';
  notificationForm: FormGroup;
  message_body:any = null;
  show:boolean = false;

  constructor(private fs: FormsService, private req: RequestsService, private funs: FunctionsService, public gds: GlobalDataService) { }

  ngOnInit() {    
    this.notificationForm = this.fs.group([
        {"key":"receivers", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"subject", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"body", "defaultValue":""}
    ]);
    this.show = true;
  }

  changeType(value){
    this.type = value;
    this.notificationForm = this.fs.update( this.notificationForm, [
        {"key":"receivers", "defaultValue":""},
        {"key":"subject", "defaultValue":""},
        {"key":"body", "defaultValue":""}
    ]);
  }

  addContact(arrayOfContacts){
    if(arrayOfContacts.length > 0){
      this.notificationForm = this.fs.update( this.notificationForm, [{"key":"receivers", "defaultValue": arrayOfContacts }] );
    } else {
      this.notificationForm = this.fs.update( this.notificationForm, [{"key":"receivers", "defaultValue": "" }] );
    }
  }

  keyupHandlerFunction(body){
    this.notificationForm = this.fs.update( this.notificationForm, [{"key":"body", "defaultValue": '<html>'+body+'</html>' }] );
  }
  send(data, isValid){
    if(isValid){
      if(this.gds.objects_of_ids.customer_id != null){
        if(this.type == 'sms'){
          try 
          { 
              delete data.body;
          } 
          catch(e) 
          { 
              data["body"] = undefined; 
          }
        }
        this.proccedSending(data);
      }else{
        this.funs.notify({
          type: 'danger',
          icon: 'fa fa-exclamation-triangle',
          title: 'Errer',
          message: 'Please specify you CID first!'
        });
      }
    }
    
    // console.log(data, isValid);
  }

  proccedSending(data:any){
    this.req.sendNotification(this.gds.objects_of_ids.customer_id, this.type, data ).subscribe(
      (res)=>{
        this.funs.notify({
          type: 'success',
          icon: 'fa fa-flag',
          title: 'Message Status',
          message: res.json()
        });
      },
      (err)=>{
        this.funs.notify({
          type: 'danger',
          icon: 'fa fa-exclamation-triangle',
          title: 'Errer',
          message: err.json().err
        });
      });
  }

}
