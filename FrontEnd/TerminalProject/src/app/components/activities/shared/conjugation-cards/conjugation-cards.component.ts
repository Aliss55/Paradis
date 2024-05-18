import { Component } from '@angular/core';
import {verb_conjugation_by_subject} from "../../Pages/utils/Verb_conjugation_by_subject";

@Component({
  selector: 'shared-conjugation-cards',
  templateUrl: './conjugation-cards.component.html',
  styleUrl: './conjugation-cards.component.scss'
})
export class ConjugationCardsComponent {

  public questions: verb_conjugation_by_subject[] = [
    {
      verb_infinitive_form: 'amar',
      singular_first_person_yo_form: 'amo',
      singular_second_person_tu_form: 'amas',
      singular_third_person_el_form: 'ama',
      singular_third_person_ella_form: 'ama',
      plural_first_person_nosotros_form: 'amamos',
      plural_second_person_ustedes_form: 'aman',
      plural_third_person_ellos_form: 'aman',
      plural_third_person_ellas_form: 'aman'
    },
    {
      verb_infinitive_form: 'temer',
      singular_first_person_yo_form: 'temo',
      singular_second_person_tu_form: 'temes',
      singular_third_person_el_form: 'teme',
      singular_third_person_ella_form: 'teme',
      plural_first_person_nosotros_form: 'tememos',
      plural_second_person_ustedes_form: 'temen',
      plural_third_person_ellos_form: 'temen',
      plural_third_person_ellas_form: 'temen'
    },
    {
      verb_infinitive_form: 'partir',
      singular_first_person_yo_form: 'parto',
      singular_second_person_tu_form: 'partes',
      singular_third_person_el_form: 'parte',
      singular_third_person_ella_form: 'parte',
      plural_first_person_nosotros_form: 'partimos',
      plural_second_person_ustedes_form: 'parten',
      plural_third_person_ellos_form: 'parten',
      plural_third_person_ellas_form: 'parten'
    },
    {
      verb_infinitive_form: 'anunciar',
      singular_first_person_yo_form: 'anuncio',
      singular_second_person_tu_form: 'anuncias',
      singular_third_person_el_form: 'anuncia',
      singular_third_person_ella_form: 'anuncian',
      plural_first_person_nosotros_form: 'anunciamos',
      plural_second_person_ustedes_form: 'anuncian',
      plural_third_person_ellos_form: 'anuncian',
      plural_third_person_ellas_form: 'anuncian'
    },
    {
      verb_infinitive_form: 'tejer',
      singular_first_person_yo_form: 'tejo',
      singular_second_person_tu_form: 'tejes',
      singular_third_person_el_form: 'teje',
      singular_third_person_ella_form: 'teje',
      plural_first_person_nosotros_form: 'tejemos',
      plural_second_person_ustedes_form: 'tejen',
      plural_third_person_ellos_form: 'tejen',
      plural_third_person_ellas_form: 'tejen'
    },
    {
      verb_infinitive_form: 'vivir',
      singular_first_person_yo_form: 'vivo',
      singular_second_person_tu_form: 'vives',
      singular_third_person_el_form: 'vive',
      singular_third_person_ella_form: 'vive',
      plural_first_person_nosotros_form: 'vivimos',
      plural_second_person_ustedes_form: 'viven',
      plural_third_person_ellos_form: 'viven',
      plural_third_person_ellas_form: 'viven'
    },
    {
      verb_infinitive_form: 'enviar',
      singular_first_person_yo_form: 'envío',
      singular_second_person_tu_form: 'envías',
      singular_third_person_el_form: 'envía',
      singular_third_person_ella_form: 'envía',
      plural_first_person_nosotros_form: 'enviamos',
      plural_second_person_ustedes_form: 'envían',
      plural_third_person_ellos_form: 'envían',
      plural_third_person_ellas_form: 'envían'
    },
    {
      verb_infinitive_form: 'correr',
      singular_first_person_yo_form: 'corro',
      singular_second_person_tu_form: 'corres',
      singular_third_person_el_form: 'corre',
      singular_third_person_ella_form: 'corre',
      plural_first_person_nosotros_form: 'corremos',
      plural_second_person_ustedes_form: 'corren',
      plural_third_person_ellos_form: 'corren',
      plural_third_person_ellas_form: 'corren'
    },    {
      verb_infinitive_form: 'decidir',
      singular_first_person_yo_form: 'decido',
      singular_second_person_tu_form: 'decides',
      singular_third_person_el_form: 'decide',
      singular_third_person_ella_form: 'decide',
      plural_first_person_nosotros_form: 'decidimos',
      plural_second_person_ustedes_form: 'deciden',
      plural_third_person_ellos_form: 'deciden',
      plural_third_person_ellas_form: 'deciden'
    },    {
      verb_infinitive_form: 'trotar',
      singular_first_person_yo_form: 'troto',
      singular_second_person_tu_form: 'trotas',
      singular_third_person_el_form: 'trota',
      singular_third_person_ella_form: 'trota',
      plural_first_person_nosotros_form: 'trotamos',
      plural_second_person_ustedes_form: 'trotan',
      plural_third_person_ellos_form: 'trotan',
      plural_third_person_ellas_form: 'trotan'
    },    {
      verb_infinitive_form: 'perder',
      singular_first_person_yo_form: 'perdí',
      singular_second_person_tu_form: 'perdiste',
      singular_third_person_el_form: 'perdió',
      singular_third_person_ella_form: 'perdió',
      plural_first_person_nosotros_form: 'perdimos',
      plural_second_person_ustedes_form: 'perdieron',
      plural_third_person_ellos_form: 'perdieron',
      plural_third_person_ellas_form: 'perdieron'
    },    {
      verb_infinitive_form: 'prohibir',
      singular_first_person_yo_form: 'prohibo',
      singular_second_person_tu_form: 'prohibes',
      singular_third_person_el_form: 'prohibe',
      singular_third_person_ella_form: 'prohibe',
      plural_first_person_nosotros_form: 'prohibimos',
      plural_second_person_ustedes_form: 'prohiben',
      plural_third_person_ellos_form: 'prohiben',
      plural_third_person_ellas_form: 'prohiben'
    }
  ]

}
