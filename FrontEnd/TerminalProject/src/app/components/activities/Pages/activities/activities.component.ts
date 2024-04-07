import { Component } from '@angular/core';
import { Options } from '../../../../interfaces/options';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  public activities: Options[] = [
    {
      name: 'Oraciones incompletas',
      description: 'Completa las oraciones',
      image: './assets/home-images/pingu.jpg',
      link: '/activities/complete-sentences',
    },
    {
      name: 'Actividades 1',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/Blog-Igu.svg',
      link: '/home',
    },
    {
      name: 'Actividades 2',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/igu-actividades.svg',
      link: '/home',
    },
  ];
}
