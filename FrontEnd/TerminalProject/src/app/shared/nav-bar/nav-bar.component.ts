import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(
    private translateService: TranslateService,
    private themeService: ThemeSwitcherService,
  ) {}

  public toggleLanguage() {
    this.translateService.use(
      this.translateService.currentLang === 'en' ? 'es' : 'en',
    );
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
