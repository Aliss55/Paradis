import {Component, OnDestroy} from '@angular/core';
import {Options} from '../../../../interfaces/options';
import {ThemeSwitcherService} from "../../../../services/theme-switcher.service";
import {Subscription} from "rxjs";
import {ImageService} from "../../../../services/image.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnDestroy {

  public blogs: Options[] = [];
  private themeSubscription: Subscription;


  constructor(private imageService: ImageService, private themeService: ThemeSwitcherService) {
    this.themeSubscription = this.themeService.actualTheme.subscribe(() =>
      this.blogs = this.getBlogs())
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private getBlogs(): Options[] {

    return [
      {
        name: 'BLOG_LABELS.BLOG_1.TITLE',
        description: 'BLOG_LABELS.BLOG_1.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-1-50px.svg', './assets/blogs-images'),
        link: '/blog/sentences-1',
      },
      {
        name: 'BLOG_LABELS.BLOG_2.TITLE',
        description: 'BLOG_LABELS.BLOG_2.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-2-50px.svg', './assets/blogs-images'),
        link: '/blog/period',
      },
      {
        name: 'BLOG_LABELS.BLOG_3.TITLE',
        description: 'BLOG_LABELS.BLOG_3.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-3-50px.svg', './assets/blogs-images'),
        link: '/blog/comma',
      },
      {
        name: 'BLOG_LABELS.BLOG_4.TITLE',
        description: 'BLOG_LABELS.BLOG_4.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-1-50px.svg', './assets/blogs-images'),
        link: '/blog/capitalization',
      },
      {
        name: 'BLOG_LABELS.BLOG_5.TITLE',
        description: 'BLOG_LABELS.BLOG_5.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-2-50px.svg', './assets/blogs-images'),
        link: '/blog/halla-haya-aya-alla-difference',
      },
      {
        name: 'BLOG_LABELS.BLOG_6.TITLE',
        description: 'BLOG_LABELS.BLOG_6.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-3-50px.svg', './assets/blogs-images'),
        link: '/blog/adverbs',
      },
      {
        name: 'BLOG_LABELS.BLOG_7.TITLE',
        description: 'BLOG_LABELS.BLOG_7.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-1-50px.svg', './assets/blogs-images'),
        link: '/blog/verbs-related-to-natural-phenomena',
      },
      {
        name: 'BLOG_LABELS.BLOG_8.TITLE',
        description: 'BLOG_LABELS.BLOG_8.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-2-50px.svg', './assets/blogs-images'),
        link: '/blog/verb-to-be',
      },
      {
        name: 'BLOG_LABELS.BLOG_9.TITLE',
        description: 'BLOG_LABELS.BLOG_9.DESCRIPTION',
        image: this.imageService.getImagePathAccordingToTheme('Blog-3-50px.svg', './assets/blogs-images'),
        link: '/blog/commas-and-tag-questions',
      }

    ];
  }


}
