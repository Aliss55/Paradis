import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [

    ButtonModule,
    CardModule,
    CommonModule,
    DockModule,
    SidebarModule,
    ToolbarModule,
  ],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DockModule,
    SidebarModule,
    ToolbarModule,
  ],
})
export class PrimeNGModule {}
