import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

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
      },
      {
        label: 'LOGO',
      }
    ]
}
