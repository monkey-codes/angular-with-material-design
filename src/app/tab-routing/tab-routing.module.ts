import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingRoutingModule } from './tab-routing-routing.module';
import { TabRoutingComponent } from './tab-routing.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [TabRoutingComponent, Tab1Component, Tab2Component],
  imports: [
    CommonModule,
    TabRoutingRoutingModule,
    MatTabsModule
  ]
})
export class TabRoutingModule { }
