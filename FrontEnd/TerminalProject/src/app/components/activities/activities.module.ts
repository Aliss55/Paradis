import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DragVerbs } from './Pages/complete-sentences-activity/drag-verbs.component';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ActivitiesComponent, DragVerbs],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeNGModule,
    DragDropModule,
    TableModule,
  ],
})
export class ActivitiesModule {}
