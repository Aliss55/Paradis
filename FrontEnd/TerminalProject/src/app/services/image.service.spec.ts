import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';
import {Theme, ThemeSwitcherService} from "./theme-switcher.service";

describe('ImageService', () => {
  let service: ImageService;
  let themeService: ThemeSwitcherService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImageService,
        {
          provide: ThemeSwitcherService,
          useValue: {
            currentAppTheme: Theme.DARK
          }
        }
      ]
    });
    service = TestBed.inject(ImageService);
    themeService = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct image path for light theme', () => {
    themeService.currentAppTheme = Theme.LIGHT;
    expect(service.getImagePathAccordingToTheme('image.png', 'path')).toEqual('path/image.png');
  });
  it('should return the correct image path for dark theme', () => {
    themeService.currentAppTheme = Theme.DARK;
    expect(service.getImagePathAccordingToTheme('image.png', 'path')).toEqual('path/Dark-Mode-image.png');
  });
});
