import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/Home/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'blog',
    loadChildren: () => import('./components/Blog/blog.module').then( m => m.BlogModule ),
  },
  {
    path: 'activities',
    loadChildren: () => import('./components/activities/activities.module').then( m => m.ActivitiesModule ),
  },
  {
    path: 'about',
    loadChildren: () => import('./components/AboutUs/about-us.module').then( m => m.AboutUsModule ),
  },
  {
    path: 'text-analyzer',
    loadChildren: () => import('./components/TextAnalyzer/text-analyzer.module').then( m => m.TextAnalyzerModule ),
  },
  {
    path: '**', redirectTo: '/home',
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
