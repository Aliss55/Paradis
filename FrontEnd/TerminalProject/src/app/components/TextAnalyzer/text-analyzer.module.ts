import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextAnalyzerRoutingModule } from './text-analyzer-routing.module';
import { TextAnalyzerComponent } from './Pages/text-analyzer/text-analyzer.component';
import {TranslateModule} from "@ngx-translate/core";
import {PrimeNGModule} from "../../styling/prime-ng.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TextAnalyzerComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    TextAnalyzerRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class TextAnalyzerModule { }
