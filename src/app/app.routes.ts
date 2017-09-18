import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/reports/reports.component';
import { Error404Component } from './components/error404/error404.component';
import { SendnotificationComponent } from './components/cp/sendnotification/sendnotification.component';
import { ManagementComponent } from './components/cp/management/management.component';

let myTitle:string = 'Qmetrix-';

const APP_ROUTES: Routes = [
  {path: 'home', component: LandingpageComponent, data: { title: myTitle+"Landing Page"} },
  {path: 'login', component: LoginComponent, data: { title: myTitle+"Login"} },
  {path: '', component: CpComponent, children: [
    {path: '', component: ManagementComponent,  data: { title: myTitle+"Management"}},
    {path: 'reports', component: ReportsComponent,  data: { title: myTitle+"Reports"}},
    {path: 'sendnotification', component: SendnotificationComponent,  data: { title: myTitle+"Send Notification"}}
  ]},
  // {path: '', component: IndexComponent, data: { breadcrumb: 'Home'}, children: [
  //       {path: '', component: HomeComponent, data: { title: 'Home Page' }},
  //       {path: 'category/:cat', component: CategoryComponent, data: { breadcrumb: 'Categories'}, children: [
  //         {path: '', component: AllcategoriesComponent, data: { title: 'Categoies Page' }},
  //         {path: 'post/:id', component: PostComponent, data: { breadcrumb: 'Post'}, children: [
  //           {path: '', component: GetpostComponent}
  //         ]}
  //       ]},
  //       {path: 'post/:id', component: PostComponent, data: { breadcrumb: 'Hot Posts'}, children: [
  //           {path: '', component: GetpostComponent }
  //       ]},
  //       {path: 'profile/:id', component: ProfileComponent},
  //       {path: 'signin', component: RegesterComponent, data: { title: 'GEER: New Registeration' } }
  //     ]},
  // {path: 'admin', component: AdIndexComponent, children: [
  //   {path: '', component: AdHomeComponent, data: { title: 'Admin-Home'}},
  //   {path: 'settings', component: AdSettingComponent, data: { title: 'Admin-Settings'}},
  //   {path: 'categories', component: AdCategoriesComponent, data: { title: 'Admin-Settings'}},
  //   {path: 'addartical', component: AdAddarticalComponent, data: { title: 'Admin-Add Artical'}},
  //   {path: 'allarticals', component: AdAllarticalsComponent, data: { title: 'Admin-All Artical'}}
    
  // ]},
  // {path: 'login', component: LogginComponent },
  {path: '**', component: Error404Component, data: { title: myTitle+"Page not found"}}
];

export const APP_ROUTES_PROVIDER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
