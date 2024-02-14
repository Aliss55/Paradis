import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private theme$ = new BehaviorSubject<string>('light');
  public actualTheme = this.theme$.asObservable();

  public initTheme(): void {
    const storedTheme: string | null = localStorage.getItem('theme$');
    if (storedTheme) {
      this.theme$.next(storedTheme);
    }
    this.createLinkToStylesheet();
    this.updateLinkToStylesheet();
  }
  toggleTheme(): void {
    this.theme$.next(this.theme$.value === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme$', this.theme$.value);
    this.updateLinkToStylesheet();
  }

  private createLinkToStylesheet(): void {
    const link = document.createElement('link');
    link.id = 'theme$';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  private updateLinkToStylesheet(): void {
    const link = document.getElementById('theme$') as HTMLLinkElement;
    if (link) {
      link.href = `/assets/themes/${this.theme$.value}-theme.css`;
    }
  }
}
