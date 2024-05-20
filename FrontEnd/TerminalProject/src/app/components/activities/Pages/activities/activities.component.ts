import {Component, OnDestroy, OnInit} from '@angular/core';
import { Options } from '../../../../interfaces/options';
import { ViewportScroller } from '@angular/common';
import { ImageService } from '../../../../services/image.service';
import { ThemeSwitcherService } from '../../../../services/theme-switcher.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent implements OnInit, OnDestroy{

  public activities: Options[] = [];
  private themeSubscription: Subscription;

  constructor(
    private imageService: ImageService,
    private themeService: ThemeSwitcherService,
    private viewportScrollerService: ViewportScroller,
  ) {
    this.themeSubscription = this.themeService.actualTheme.subscribe(
      () => (this.activities = this.getActivites()),
    );
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }


  private getActivites(): Options[] {
    return [
      {
        name: 'ACTIVITIES_LABELS.CARDS_GAME.PROFESSIONS_OCCUPATIONS',
        description: 'ACTIVITIES_LABELS.CARDS_GAME.PROFESSIONS_OCCUPATIONS_CARD_DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-3-50px.svg',
          './assets/penguin-images',
        ),
        link: '/activities/professions-and-occupations',
      },
      {
        name: 'ACTIVITIES_LABELS.CARDS_GAME.DEMONYMS',
        description: 'ACTIVITIES_LABELS.CARDS_GAME.DEMONYMS_CARD_DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-2-50px.svg',
          './assets/penguin-images',
        ),
        link: '/activities/demonyms',
      },
      {
        name: 'ACTIVITIES_LABELS.SPELLING_ACTIVITIES.USAGE_OF_THE_LETTER_U',
        description: 'ACTIVITIES_LABELS.SPELLING_ACTIVITIES.USAGE_OF_THE_LETTER_U_CARD_DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-1-50px.svg',
          './assets/penguin-images',
        ),
        link: '/activities/UsageOfLetterU',
      },
      {
        name: 'ACTIVITIES_LABELS.GRAMMAR_CONJUGATION_ACTIVITY.TITLE',
        description: 'ACTIVITIES_LABELS.GRAMMAR_CONJUGATION_ACTIVITY.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-3-50px.svg',
          './assets/penguin-images',
        ),
        link: '/activities/conjugateVerbs',
      },
    ];
  };

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
