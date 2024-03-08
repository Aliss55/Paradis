import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss',
})
export class MenuOptionsComponent {
  public items = [
    {
      name: 'Oraciones',
      description: '¿Que son las oraciones?',
      image: './assets/home-images/pingu.jpg',
      link: '/home',
    },
    {
      name: 'Oraciones incompletas',
      description: 'Completa las oraciones',
      image: './assets/home-images/pingu.jpg',
      link: '/home',
    },
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/Blog-Igu.svg',
      link: '/home',
    },
    {
      name: 'Home',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/igu-actividades.svg',
      link: '/home',
    },
  ];
}
