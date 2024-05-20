import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { ProfessionsAndOccupationsComponent } from './Pages/professions-and-occupations/professions-and-occupations.component';
import { DemonymsComponent } from './Pages/demonyms/demonyms.component';
import {SharedActivitiesModule} from "./shared/shared-activities.module";
import {CompleteSentencesToBeComponent} from "./Pages/complete-sentences-to-be/complete-sentences-to-be.component";
import { UsageOfULetterUComponent } from './Pages/usage-of-uletter-u/usage-of-uletter-u.component';
import { ConjugateVerbsComponent } from './Pages/conjugate-verbs/conjugate-verbs.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ProfessionsAndOccupationsComponent,
    DemonymsComponent,
    CompleteSentencesToBeComponent,
    UsageOfULetterUComponent,
    ConjugateVerbsComponent

  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeNGModule,
    SharedActivitiesModule
  ],
})
export class ActivitiesModule {}
