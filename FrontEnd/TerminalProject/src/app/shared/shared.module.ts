import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {PrimeNGModule} from "../styling/prime-ng.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    NavBarComponent
  ],
    imports: [
        CommonModule,
        PrimeNGModule,
        TranslateModule

    ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
