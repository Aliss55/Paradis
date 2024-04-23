import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './Pages/blog/blog.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BlogRoutingModule } from './blog-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SentencesBlog1Component } from './Pages/articles/sentences-blog-1/sentences-blog-1.component';
import { PeriodBlog2Component } from './Pages/articles/period-blog-2/period-blog-2.component';
import { CommaBlog3Component } from './Pages/articles/comma-blog-3/comma-blog-3.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
@NgModule({
  declarations: [BlogComponent, SentencesBlog1Component, PeriodBlog2Component, CommaBlog3Component],
  imports: [
    CommonModule,
    BlogRoutingModule,
    TranslateModule,
    PrimeNGModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class BlogModule {}
