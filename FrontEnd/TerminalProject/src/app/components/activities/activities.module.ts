import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { ProfessionsAndOccupationsComponent } from './Pages/professions-and-occupations/professions-and-occupations.component';

@NgModule({
  declarations: [ActivitiesComponent, ProfessionsAndOccupationsComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeNGModule,
    DragDropModule,
    TableModule,
    ChipModule,
  ],
})
export class ActivitiesModule {}
