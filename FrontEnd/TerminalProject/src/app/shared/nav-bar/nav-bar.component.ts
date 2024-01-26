import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private translateService: TranslateService) {
  }
  items: MenuItem[] | undefined =
    [
      {
        label: 'LOGO',
      },
      {
        label: 'LOGO',
      },
      {
        label: 'LOGO',
      },
      {
        label: 'LOGO',
      },
      {
        label: 'LOGO',
      }
    ]
}
