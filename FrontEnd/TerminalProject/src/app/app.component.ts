import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TerminalProject';

  constructor(translateService: TranslateService){
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
}
