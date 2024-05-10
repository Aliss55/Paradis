import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteSentencesInputComponent } from './complete-sentences-input/complete-sentences-input.component';
import { PrimeNGModule } from '../../../styling/prime-ng.module';

@NgModule({
  declarations: [CompleteSentencesInputComponent],
  imports: [CommonModule, PrimeNGModule],
  exports: [CompleteSentencesInputComponent],
})
export class SharedActivitiesModule {}
