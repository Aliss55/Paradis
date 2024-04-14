import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimeNGModule } from '../styling/prime-ng.module';
import { TranslateModule } from '@ngx-translate/core';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlogEntryTemplateComponent } from './blog-entry-template/blog-entry-template.component';
import { CardsGameComponent } from './cards-game/cards-game.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MenuOptionsComponent,
    BlogEntryTemplateComponent,
    CardsGameComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule,
    HttpClientModule,
    TranslateModule,
  ],
  exports: [
    NavBarComponent,
    MenuOptionsComponent,
    BlogEntryTemplateComponent,
    CardsGameComponent,
  ],
})
export class SharedModule {}
