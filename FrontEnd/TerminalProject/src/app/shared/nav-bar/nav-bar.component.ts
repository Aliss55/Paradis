import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  public actualTheme!: string | null;
  constructor(
    private translateService: TranslateService,
    private themeService: ThemeSwitcherService,
  ) {}

  ngOnInit(): void {
    this.actualTheme = localStorage.getItem('theme$');
  }

  // public actualTheme: any = this.themeService.actualTheme.subscribe(
  //   (theme) => (this.actualTheme = theme),
  // );

  public toggleLanguage() {
    const observable$ = this.translateService.use(
      this.translateService.currentLang === 'en' ? 'es' : 'en',
    );
  }

  public toggleTheme(): void {
    const observable$ = this.themeService.actualTheme.subscribe({
      next: (theme) => {
        this.actualTheme = theme;
      },
    });
    this.themeService.toggleTheme();
    observable$.unsubscribe();
  }
}
