import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Theme, ThemeSwitcherService} from '../../services/theme-switcher.service';
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  public actualTheme!: string | null;
  public sidebarVisible: boolean = false;
  protected readonly Theme = Theme;
  constructor(
    private translateService: TranslateService,
    public themeService: ThemeSwitcherService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.actualTheme = localStorage.getItem('theme$');
    // cambiar a true sidbarVisible cuando la pantalla sea menor a 768px
    if (window.innerWidth <= 929) {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }

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

  public getLogoPath(logo_name: string): string {
    return this.imageService.getImagePathAccordingToTheme(logo_name, 'assets/logos')
  }

}
