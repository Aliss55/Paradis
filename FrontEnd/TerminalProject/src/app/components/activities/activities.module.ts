import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ActivitiesModule { }
