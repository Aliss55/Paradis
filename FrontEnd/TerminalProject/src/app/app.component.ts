import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeSwitcherService} from "./services/theme-switcher.service";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'TerminalProject';

  constructor(translateService: TranslateService, private themeService: ThemeSwitcherService){
    translateService.setDefaultLang('es');
    translateService.use('es');
  }

  ngOnInit(): void {
      this.themeService.initTheme();
  }

    toggleTheme(): void{
    this.themeService.toggleTheme();
    }

}
