import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {TranslateModule} from "@ngx-translate/core";
import {CompleteSentencesInputComponent} from "./complete-sentences-input/complete-sentences-input.component";
import {PrimeNGModule} from "../../../styling/prime-ng.module";

@NgModule({
  declarations: [
    CompleteSentencesInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule,
    PrimeNGModule
  ],
  exports: [
    CompleteSentencesInputComponent
  ],
})
export class SharedActivitiesModule {}
