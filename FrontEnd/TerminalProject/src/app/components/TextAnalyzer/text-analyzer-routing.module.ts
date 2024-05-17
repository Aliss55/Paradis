import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextAnalyzerComponent} from "./Pages/text-analyzer/text-analyzer.component";

const routes: Routes = [
  {
    path: '',
    component: TextAnalyzerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextAnalyzerRoutingModule { }
