import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { ProfessionsAndOccupationsComponent } from './Pages/professions-and-occupations/professions-and-occupations.component';
import {DemonymsComponent} from "./Pages/demonyms/demonyms.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
