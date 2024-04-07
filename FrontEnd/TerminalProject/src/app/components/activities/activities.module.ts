import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CompleteSentencesActivityComponent } from './Pages/complete-sentences-activity/complete-sentences-activity.component';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  declarations: [ActivitiesComponent, CompleteSentencesActivityComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeNGModule,
    DragDropModule,
  ],
})
export class ActivitiesModule {}
