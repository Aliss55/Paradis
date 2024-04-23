import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Pages/blog/blog.component';
import { SentencesBlog1Component } from './Pages/articles/sentences-blog-1/sentences-blog-1.component';
import {PeriodBlog2Component} from "./Pages/articles/period-blog-2/period-blog-2.component";
import {CommaBlog3Component} from "./Pages/articles/comma-blog-3/comma-blog-3.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
