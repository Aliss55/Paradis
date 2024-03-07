import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './Pages/blog/blog.component';
import {TranslateModule} from '@ngx-translate/core';
import { PrimeNGModule } from '../../styling/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {BlogRoutingModule} from "./blog-routing.module";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
   TranslateModule,
    PrimeNGModule,
    SharedModule,
    RouterModule,
    RouterModule,
    BlogRoutingModule
  ],
  exports:[
  ],
  providers: [],
})
export class BlogModule {}
