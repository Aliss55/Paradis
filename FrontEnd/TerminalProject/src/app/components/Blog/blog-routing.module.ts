import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Pages/blog/blog.component';
import { SentencesBlog1Component } from './Pages/articles/sentences-blog-1/sentences-blog-1.component';
import {PeriodBlog2Component} from "./Pages/articles/period-blog-2/period-blog-2.component";
import {CommaBlog3Component} from "./Pages/articles/comma-blog-3/comma-blog-3.component";
import {CapitalizationBlog4Component} from "./Pages/articles/capitalization-blog-4/capitalization-blog-4.component";
import {
  HallaHayaAyaAllaDifferenceBlog5Component
} from "./Pages/articles/halla-haya-aya-alla-difference-blog-5/halla-haya-aya-alla-difference-blog-5.component";
import {AdverbBlog6Component} from "./Pages/articles/adverb-blog-6/adverb-blog-6.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'sentences-1',
    component: SentencesBlog1Component,
  },
  {
    path: 'period',
    component: PeriodBlog2Component,
  },
  {
    path: 'comma',
    component: CommaBlog3Component,
  },
  {
    path: 'capitalization',
    component: CapitalizationBlog4Component,
  },
  {
    path: 'halla-haya-aya-alla-difference',
    component: HallaHayaAyaAllaDifferenceBlog5Component,
  },
  {
    path: 'adverbs',
    component: AdverbBlog6Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
