import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { DragVerbs } from './Pages/complete-sentences-activity/drag-verbs.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
  {
    path: 'complete-sentences',
    component: DragVerbs,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
