import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { ProfessionsAndOccupationsComponent } from './Pages/professions-and-occupations/professions-and-occupations.component';
import {DemonymsComponent} from "./Pages/demonyms/demonyms.component";
import {CompleteSentencesToBeComponent} from "./Pages/complete-sentences-to-be/complete-sentences-to-be.component";
import {UsageOfULetterUComponent} from "./Pages/usage-of-uletter-u/usage-of-uletter-u.component";
import {ConjugateVerbsComponent} from "./Pages/conjugate-verbs/conjugate-verbs.component";

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
  {
    path: 'professions-and-occupations',
    component: ProfessionsAndOccupationsComponent,
  },
  {
    path: 'demonyms',
    component: DemonymsComponent,
  },
  {
    path: 'to-be',
    component: CompleteSentencesToBeComponent
  },
  {
    path: 'UsageOfLetterU',
    component: UsageOfULetterUComponent
  },
  {
    path: 'conjugateVerbs',
    component: ConjugateVerbsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
