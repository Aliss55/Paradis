import {Component, Input} from '@angular/core';
import {Options} from "../../interfaces/options";

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss',
})
export class MenuOptionsComponent {
  @Input()
  public options:Options[] = [];
}
