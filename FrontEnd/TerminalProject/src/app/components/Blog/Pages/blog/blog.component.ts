import { Component, OnDestroy, OnInit } from '@angular/core';
import { Options } from '../../../../interfaces/options';
import { ThemeSwitcherService } from '../../../../services/theme-switcher.service';
import { Subscription } from 'rxjs';
import { ImageService } from '../../../../services/image.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnDestroy, OnInit {
  public blogs: Options[] = [];
  private themeSubscription: Subscription;

  constructor(
    private imageService: ImageService,
    private themeService: ThemeSwitcherService,
    private viewportScrollerService: ViewportScroller,
  ) {
    this.themeSubscription = this.themeService.actualTheme.subscribe(
      () => (this.blogs = this.getBlogs()),
    );
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private getBlogs(): Options[] {
    return [
      {
        name: 'BLOG_LABELS.BLOG_1.TITLE',
        description: 'BLOG_LABELS.BLOG_1.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-1-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/sentences-1',
      },
      {
        name: 'BLOG_LABELS.BLOG_2.TITLE',
        description: 'BLOG_LABELS.BLOG_2.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-2-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/period',
      },
      {
        name: 'BLOG_LABELS.BLOG_3.TITLE',
        description: 'BLOG_LABELS.BLOG_3.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-3-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/comma',
      },
      {
        name: 'BLOG_LABELS.BLOG_4.TITLE',
        description: 'BLOG_LABELS.BLOG_4.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-1-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/capitalization',
      },
      {
        name: 'BLOG_LABELS.BLOG_5.TITLE',
        description: 'BLOG_LABELS.BLOG_5.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-2-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/halla-haya-aya-alla-difference',
      },
      {
        name: 'BLOG_LABELS.BLOG_6.TITLE',
        description: 'BLOG_LABELS.BLOG_6.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-3-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/adverbs',
      },
      {
        name: 'BLOG_LABELS.BLOG_7.TITLE',
        description: 'BLOG_LABELS.BLOG_7.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-1-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/verbs-related-to-natural-phenomena',
      },
      {
        name: 'BLOG_LABELS.BLOG_8.TITLE',
        description: 'BLOG_LABELS.BLOG_8.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-2-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/verb-to-be',
      },
      {
        name: 'BLOG_LABELS.BLOG_9.TITLE',
        description: 'BLOG_LABELS.BLOG_9.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme(
          'Penguin-3-50px.svg',
          './assets/penguin-images',
        ),
        link: '/blog/commas-and-tag-questions',
      },
    ];
  }
}
