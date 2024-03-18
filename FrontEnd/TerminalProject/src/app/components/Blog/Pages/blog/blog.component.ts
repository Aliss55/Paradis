import { Component } from '@angular/core';
import {Options} from "../../../../interfaces/options";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  public blogs :Options[]= [
    {
      name: 'Oraciones',
      description: '¿Que son las oraciones?',
      image: './assets/home-images/pingu.jpg',
      link: '/home',
    },
    {
      name: 'Blog 1',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/Blog-Igu.svg',
      link: '/home',
    },
    {
      name: 'Blog 2',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/igu-actividades.svg',
      link: '/home',
    },
  ];

}
