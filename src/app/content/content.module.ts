import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { BreedCardComponent } from './breed-card/breed-card.component';


@NgModule({
  declarations: [ContentComponent, BreedCardComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ContentModule { }
