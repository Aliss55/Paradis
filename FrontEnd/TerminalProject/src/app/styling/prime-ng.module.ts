import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";

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
    ToastModule,
    DividerModule,
    AnimateOnScrollModule,
    ProgressSpinnerModule,
    FormsModule,
    InputTextModule,
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
    ToastModule,
    DividerModule,
    AnimateOnScrollModule,
    ProgressSpinnerModule,
    FormsModule,
    InputTextModule,
  ],
})
export class PrimeNGModule {}
