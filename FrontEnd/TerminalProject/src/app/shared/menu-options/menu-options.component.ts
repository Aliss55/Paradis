import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss',
})
export class MenuOptionsComponent {
  public items = [
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: '/home',
      link: '/home',
    },
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: '/home',
      link: '/home',
    },
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: '/home',
      link: '/home',
    },
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: '/home',
      link: '/home',
    },
  ];
}
