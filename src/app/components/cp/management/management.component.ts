import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { AuthService } from '../../../_services/auth.service';
import { GlobalDataService } from '../../../_services/globaldata.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers: [ FunctionsService, AuthService, RequestsService ]
})
export class ManagementComponent implements OnInit {
  isLoaded:boolean = false;
  
  customersData: any;
  sitesData: any;

  objects_of_ids:any;

  constructor(private req: RequestsService, private funs: FunctionsService, private auth: AuthService, private router: Router, public gds: GlobalDataService) { }

  ngOnInit() {
    this.objects_of_ids = this.gds.objects_of_ids;    
    if(this.objects_of_ids.customer_id == null){      
      this.getCustomer();
    }else{
      this.customersData = this.gds.getFromQmetrixData('manageCustomers');
      this.sitesData = this.gds.getFromQmetrixData('customerSites');
      this.isLoaded = true;
    }
    
  }

  getCustomer() {
    this.req.getCustomer().subscribe(
      (res) => {
        this.gds.pushToQmetrixData("manageCustomers", res.json());
        this.customersData = this.gds.getFromQmetrixData('manageCustomers');
        this.getSitesData();
      },
      (err) => {
        this.funs.notify({
          type: 'danger',
          icon: 'fa fa-exclamation-triangle',
          title: 'Errer',
          message: err.json().err
        });
      }
    )
  }
  
  // changeCustomerId(){
  //   if(this.objects_of_ids.customer_id != null){
  //     this.getSitesData();
  //   }else{
  //     this.sitesData = null;
  //     this.objects_of_ids.site_id = null;
  //   }
  // }
  getSitesData(){
    this.req.getSitesData( this.gds.getFromQmetrixData("manageCustomers/0/customer_id") ).subscribe(
      (res)=>{
        this.gds.pushToQmetrixData("customerSites", res.json());
        this.sitesData = this.gds.getFromQmetrixData('customerSites');
        this.objects_of_ids.customer_id = this.customersData[0].customer_id;
        this.isLoaded = true;
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
  // onSubmit(e){
  //   if(this.objects_of_ids.site_id != null){
  //     this.getSiteBluePrint();
  //   }
  //   return false;
  // }
  goToReport(site) {
      this.objects_of_ids.site_id = site.site_id;
      this.gds.objects_of_ids = this.objects_of_ids;
      this.getSiteBluePrint();
      return false;
  }
  getSiteBluePrint(){
    this.req.getSiteBluePrint( this.objects_of_ids.customer_id, this.objects_of_ids.site_id ).subscribe(
      (res)=>{
        this.gds.pushToQmetrixData('siteBluePrint', res.json());
        this.router.navigate(['reports']);
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
