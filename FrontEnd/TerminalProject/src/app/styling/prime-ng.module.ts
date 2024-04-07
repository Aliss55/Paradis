import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DockModule,
    SidebarModule,
    ToolbarModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DockModule,
    SidebarModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNGModule {}
