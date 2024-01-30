import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DockModule } from 'primeng/dock';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    DockModule,
    CardModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    DockModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNGModule { }
