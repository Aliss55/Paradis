import { Component } from '@angular/core';
import { Options } from '../../../../interfaces/options';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  public blogs: Options[] = [
    {
      name: 'BLOG_LABELS.BLOG_1.TITLE',
      description: 'BLOG_LABELS.BLOG_1.DESCRIPTION',
      image: './assets/blogs-images/Oracion - 220x220.svg',
      link: '/blog/sentences-1',
    },
    {
      name: 'BLOG_LABELS.BLOG_2.TITLE',
      description: 'BLOG_LABELS.BLOG_2.DESCRIPTION',
      image: './assets/home-images/pingu.jpg',
      link: '/blog/period',
    },
    {
      name: 'BLOG_LABELS.BLOG_3.TITLE',
      description: 'BLOG_LABELS.BLOG_3.DESCRIPTION',
      image: './assets/home-images/pingu.jpg',
      link: '/blog/comma',
    },
    {
      name: 'BLOG_LABELS.BLOG_4.TITLE',
      description: 'BLOG_LABELS.BLOG_4.DESCRIPTION',
      image: './assets/home-images/pingu.jpg',
      link: '/blog/capitalization',
    },
    {
      name: 'BLOG_LABELS.BLOG_5.TITLE',
      description: 'BLOG_LABELS.BLOG_5.DESCRIPTION',
      image: './assets/home-images/pingu.jpg',
      link: '/blog/halla-haya-aya-alla-difference',
    },
    {
      name: 'BLOG_LABELS.BLOG_6.TITLE',
      description: 'BLOG_LABELS.BLOG_6.DESCRIPTION',
      image: './assets/home-images/pingu.jpg',
      link: '/blog/adverbs',
    },

  ];
}
