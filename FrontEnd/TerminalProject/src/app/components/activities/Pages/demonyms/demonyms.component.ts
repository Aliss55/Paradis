import { Component } from '@angular/core';
import {demonyms} from "../utils/Demonyms";

@Component({
  selector: 'app-demonyms',
  templateUrl: './demonyms.component.html',
  styleUrl: './demonyms.component.scss'
})
export class DemonymsComponent {
  public listOfCountries: string[] = Object.values(demonyms)

  public countries = [
    {
      image_url: './assets/countries/Mexico.svg',
      answer: 'mexicano',
    },
    {
      image_url: './assets/countries/Rusia.svg',
      answer: 'ruso',
    },
    {
      image_url: './assets/countries/USA1.svg',
      answer: 'estadounidense',
    },
    {
      image_url: './assets/countries/Portugal.svg',
      answer: 'portugués',
    },
    {
      image_url: './assets/countries/Japon1.svg',
      answer: 'japonés',
    },
    {
      image_url: './assets/countries/Italia.svg',
      answer: 'italiano',
    },
    {
      image_url: './assets/countries/Francia.svg',
      answer: 'francés',
    },
    {
      image_url: './assets/countries/España.svg',
      answer: 'español',
    },
    {
      image_url: './assets/countries/Corea.svg',
      answer: 'surcoreano',
    },
    {
      image_url: './assets/countries/China.svg',
      answer: 'chino',
    },
    {
      image_url: './assets/countries/Canada.svg',
      answer: 'canadiense',
    },
    {
      image_url: './assets/countries/Brasil.svg',
      answer: 'brasileño',
    },
    {
      image_url: './assets/countries/Argentina.svg',
      answer: 'argentino',
    },
  ]



}
