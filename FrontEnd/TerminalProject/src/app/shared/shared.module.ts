import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {PrimeNGModule} from "../styling/prime-ng.module";



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule

  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
