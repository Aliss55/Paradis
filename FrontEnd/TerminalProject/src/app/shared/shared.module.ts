import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {PrimeNGModule} from "../styling/prime-ng.module";
import { TranslateModule} from "@ngx-translate/core";
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    NavBarComponent,
    MenuOptionsComponent
  ],
    imports: [
        CommonModule,
        PrimeNGModule,
        RouterModule,
      HttpClientModule,
      TranslateModule

    ],
  exports:[
    NavBarComponent,
    MenuOptionsComponent
  ]
})
export class SharedModule { }
