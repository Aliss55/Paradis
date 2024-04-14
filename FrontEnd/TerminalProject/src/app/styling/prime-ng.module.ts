import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';

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
    ChipModule,
    TooltipModule,
    FieldsetModule,
    TagModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DockModule,
    SidebarModule,
    ToolbarModule,
    TableModule,
    ChipModule,
    TooltipModule,
    FieldsetModule,
    TagModule,
  ],
})
export class PrimeNGModule {}
