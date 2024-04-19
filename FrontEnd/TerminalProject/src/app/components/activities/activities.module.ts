import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { ProfessionsAndOccupationsComponent } from './Pages/professions-and-occupations/professions-and-occupations.component';

@NgModule({
  declarations: [ActivitiesComponent, ProfessionsAndOccupationsComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeNGModule,
  ],
})
export class ActivitiesModule {}
