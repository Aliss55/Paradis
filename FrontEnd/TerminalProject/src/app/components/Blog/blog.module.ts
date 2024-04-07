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

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
@NgModule({
  declarations: [BlogComponent, SentencesBlog1Component],
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
