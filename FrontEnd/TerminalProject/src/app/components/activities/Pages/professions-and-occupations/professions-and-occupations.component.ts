import { Component } from '@angular/core';
@Component({
  selector: 'app-professions-and-occupations',
  templateUrl: './professions-and-occupations.component.html',
  styleUrl: './professions-and-occupations.component.scss',
})
export class ProfessionsAndOccupationsComponent {
  professions_and_occupations = [
    {
      image_url: './assets/ProfessionsOcupations/Astronauta.svg',
      answer: 'astronauta',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Bailarina.svg',
      answer: 'bailarina',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Bombero.svg',
      answer: 'bombero',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Dentista.svg',
      answer: 'dentista',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Futbolista.svg',
      answer: 'futbolista',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Maestra.svg',
      answer: 'profesora',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Mariachi.svg',
      answer: 'mariachi',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Mecanico.svg',
      answer: 'mecánico',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Medico.svg',
      answer: 'doctora',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Mesero.svg',
      answer: 'mesero',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Militar.svg',
      answer: 'militar',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Piloto.svg',
      answer: 'piloto',
    },
    {
      image_url:
        './assets/ProfessionsOcupations/Veterinario.svg',
      answer: 'veterinario',
    },
  ];
}
