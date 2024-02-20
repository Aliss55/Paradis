import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private theme$ = new BehaviorSubject<string>('light');
  public actualTheme = this.theme$.asObservable();
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  public initTheme(): void {
    const storedTheme: string | null = localStorage.getItem('theme$');
    if (storedTheme) {
      this.theme$.next(storedTheme);
    }
    this.createLinkToStylesheet();
    this.updateLinkToStylesheet();
    this.setGradient(this.theme$.value);
  }
  toggleTheme(): void {
    this.theme$.next(this.theme$.value === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme$', this.theme$.value);
    this.updateLinkToStylesheet();
    this.setGradient(this.theme$.value);
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

  setGradient(theme: string) {
    const body = this.document.body;
    if (theme === 'dark') {
      this.renderer.removeClass(body, 'light-theme-gradient');
      this.renderer.addClass(body, 'dark-theme-gradient');
    } else {
      this.renderer.removeClass(body, 'dark-theme-gradient');
      this.renderer.addClass(body, 'light-theme-gradient');
    }
  }
}
