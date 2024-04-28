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
import { CapitalizationBlog4Component } from './Pages/articles/capitalization-blog-4/capitalization-blog-4.component';
import { HallaHayaAyaAllaDifferenceBlog5Component } from './Pages/articles/halla-haya-aya-alla-difference-blog-5/halla-haya-aya-alla-difference-blog-5.component';
import { AdverbBlog6Component } from './Pages/articles/adverb-blog-6/adverb-blog-6.component';
import { VerbsRelatedNaturalPhenomenaBlog7Component } from './Pages/articles/verbs-related-natural-phenomena-blog-7/verbs-related-natural-phenomena-blog-7.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
@NgModule({
  declarations: [
    BlogComponent,
    SentencesBlog1Component,
    PeriodBlog2Component,
    CommaBlog3Component,
    CapitalizationBlog4Component,
    HallaHayaAyaAllaDifferenceBlog5Component,
    AdverbBlog6Component,
    VerbsRelatedNaturalPhenomenaBlog7Component
  ],
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
