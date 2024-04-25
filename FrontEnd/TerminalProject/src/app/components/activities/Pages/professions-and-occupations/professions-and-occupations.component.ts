import { Component } from '@angular/core';
@Component({
  selector: 'app-professions-and-occupations',
  templateUrl: './professions-and-occupations.component.html',
  styleUrl: './professions-and-occupations.component.scss',
})
export class ProfessionsAndOccupationsComponent {
  professions_and_occupations = [
    {
      image_url: './assets/CardsGame/Astronauta.jpg',
      answer: 'astronauta',
    },
    {
      image_url:
        './assets/CardsGame/Policia.jpg',
      answer: 'policia',
    },
    {
      image_url:
        './assets/CardsGame/Bombero.jpg',
      answer: 'bombero',
    },
    {
      image_url:
        './assets/CardsGame/Bailarina.jpg',
      answer: 'bailarina',
    },
    {
      image_url:
        './assets/CardsGame/Dentista.jpg',
      answer: 'dentista',
    },
    {
      image_url:
        './assets/CardsGame/Chef.jpg',
      answer: 'chef',
    },
    {
      image_url:
        './assets/CardsGame/Medico.jpg',
      answer: 'médico',
    },
    {
      image_url:
        './assets/CardsGame/Piloto.jpg',
      answer: 'piloto',
    },
  ];
}
