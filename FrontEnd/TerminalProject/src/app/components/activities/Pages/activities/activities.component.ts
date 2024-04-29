import {Component, OnInit} from '@angular/core';
import { Options } from '../../../../interfaces/options';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent implements OnInit{
  public activities: Options[] = [
    {
      name: 'Oraciones incompletas',
      description: 'Completa las oraciones',
      image: './assets/home-images/pingu.jpg',
      link: '/activities/complete-sentences',
    },
    {
      name: 'Profesiones y ocupaciones',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/Blog-Igu.svg',
      link: '/activities/professions-and-occupations',
    },
    {
      name: 'Actividades 2',
      description: 'in this blo we will talk about the latest news',
      image: './assets/home-images/igu-actividades.svg',
      link: '/home',
    },
  ];

  constructor(private viewportScrollerService: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }
}
