import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabRoutingComponent} from './tab-routing.component';
import {Tab1Component} from "./tab1/tab1.component";
import {Tab2Component} from "./tab2/tab2.component";

const routes: Routes = [
  {
    path: '', component: TabRoutingComponent,
    children: [
      { path: '', redirectTo: 'tab1', pathMatch:'full' },
      { path: 'tab1', component: Tab1Component },
      { path: 'tab2', component: Tab2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingRoutingModule {
}
