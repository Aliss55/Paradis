import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {TranslateModule} from "@ngx-translate/core";
import {CompleteSentencesInputComponent} from "./complete-sentences-input/complete-sentences-input.component";
import {PrimeNGModule} from "../../../styling/prime-ng.module";
import { WriteTheCorrectOptionComponent } from './write-the-correct-option/write-the-correct-option.component';

@NgModule({
  declarations: [
    CompleteSentencesInputComponent,
    WriteTheCorrectOptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule,
    PrimeNGModule
  ],
  exports: [
    CompleteSentencesInputComponent,
    WriteTheCorrectOptionComponent
  ],
})
export class SharedActivitiesModule {}
