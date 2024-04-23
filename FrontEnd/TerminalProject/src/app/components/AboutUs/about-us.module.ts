import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimeNGModule} from "../../styling/prime-ng.module";
import {AboutUsComponent} from "./Pages/about-us/about-us.component";
import {TranslateModule} from "@ngx-translate/core";
import {AboutUsRoutingModule} from "./about-us-routing.module";
import {StyleClassModule} from "primeng/styleclass";



@NgModule({
  declarations: [
    AboutUsComponent
  ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        PrimeNGModule,
        TranslateModule,
        StyleClassModule
    ]
})
export class AboutUsModule { }