import { Component } from '@angular/core';
import {verb_conjugation_by_subject} from "../utils/Verb_conjugation_by_subject";

@Component({
  selector: 'app-conjugate-verbs',
  templateUrl: './conjugate-verbs.component.html',
  styleUrl: './conjugate-verbs.component.scss'
})
export class ConjugateVerbsComponent {

  public questions: verb_conjugation_by_subject[] = [
    {
      verb_infinitive_form: 'amar',
      singular_first_person_yo_form: ['yo','amo'],
      singular_second_person_tu_form: ['tú','amas'],
      singular_third_person_el_form: ['el','ama'],
      singular_third_person_ella_form: ['ella','ama'],
      plural_first_person_nosotros_form: ['nosotros','amamos'],
      plural_second_person_ustedes_form: ['ustedes','aman'],
      plural_third_person_ellos_form: ['ellos','aman'],
      plural_third_person_ellas_form: ['ellas','aman']
    },
    {
      verb_infinitive_form: 'temer',
      singular_first_person_yo_form: ['yo','temo'],
      singular_second_person_tu_form: ['tú','temes'],
      singular_third_person_el_form: ['el','teme'],
      singular_third_person_ella_form: ['ella','teme'],
      plural_first_person_nosotros_form: ['nosotros','tememos'],
      plural_second_person_ustedes_form: ['ustedes','temen'],
      plural_third_person_ellos_form: ['ellos','temen'],
      plural_third_person_ellas_form: ['ellas','temen']
    },
    {
      verb_infinitive_form: 'partir',
      singular_first_person_yo_form: ['yo','parto'],
      singular_second_person_tu_form: ['tú','partes'],
      singular_third_person_el_form: ['el','parte'],
      singular_third_person_ella_form: ['ella','parte'],
      plural_first_person_nosotros_form: ['nosotros','partimos'],
      plural_second_person_ustedes_form: ['ustedes','parten'],
      plural_third_person_ellos_form: ['ellos','parten'],
      plural_third_person_ellas_form: ['ellas','parten']
    },
    {
      verb_infinitive_form: 'anunciar',
      singular_first_person_yo_form: ['yo','anuncio'],
      singular_second_person_tu_form: ['tú','anuncias'],
      singular_third_person_el_form: ['el','anuncia'],
      singular_third_person_ella_form: ['ella','anuncia'],
      plural_first_person_nosotros_form: ['nosotros','anunciamos'],
      plural_second_person_ustedes_form: ['ustedes','anuncian'],
      plural_third_person_ellos_form: ['ellos','anuncian'],
      plural_third_person_ellas_form: ['ellas','anuncian']
    },
    {
      verb_infinitive_form: 'tejer',
      singular_first_person_yo_form: ['yo','tejo'],
      singular_second_person_tu_form: ['tú','tejes'],
      singular_third_person_el_form: ['el','teje'],
      singular_third_person_ella_form: ['ella','teje'],
      plural_first_person_nosotros_form: ['nosotros','tejemos'],
      plural_second_person_ustedes_form: ['ustedes','tejen'],
      plural_third_person_ellos_form: ['ellos','tejen'],
      plural_third_person_ellas_form: ['ellas','tejen']
    },
    {
      verb_infinitive_form: 'vivir',
      singular_first_person_yo_form: ['yo','vivo'],
      singular_second_person_tu_form: ['tú','vives'],
      singular_third_person_el_form: ['el','vive'],
      singular_third_person_ella_form: ['ella','vive'],
      plural_first_person_nosotros_form: ['nosotros','vivimos'],
      plural_second_person_ustedes_form: ['ustedes','viven'],
      plural_third_person_ellos_form: ['ellos','viven'],
      plural_third_person_ellas_form: ['ellas','viven']
    },
    {
      verb_infinitive_form: 'enviar',
      singular_first_person_yo_form: ['yo','envío'],
      singular_second_person_tu_form: ['tú','envías'],
      singular_third_person_el_form: ['el','envía'],
      singular_third_person_ella_form: ['ella','envía'],
      plural_first_person_nosotros_form: ['nosotros','enviamos'],
      plural_second_person_ustedes_form: ['ustedes','envían'],
      plural_third_person_ellos_form: ['ellos','envían'],
      plural_third_person_ellas_form: ['ellas','envían']
    },
    {
      verb_infinitive_form: 'correr',
      singular_first_person_yo_form: ['yo','corro'],
      singular_second_person_tu_form: ['tú','corres'],
      singular_third_person_el_form: ['el','corre'],
      singular_third_person_ella_form: ['ella','corre'],
      plural_first_person_nosotros_form: ['nosotros','corremos'],
      plural_second_person_ustedes_form: ['ustedes','corren'],
      plural_third_person_ellos_form: ['ellos','corren'],
      plural_third_person_ellas_form: ['ellas','corren']
    },    {
      verb_infinitive_form: 'decidir',
      singular_first_person_yo_form: ['yo','decido'],
      singular_second_person_tu_form: ['tú','decides'],
      singular_third_person_el_form: ['el','decide'],
      singular_third_person_ella_form: ['ella','decide'],
      plural_first_person_nosotros_form: ['nosotros','decidimos'],
      plural_second_person_ustedes_form: ['ustedes','deciden'],
      plural_third_person_ellos_form: ['ellos','deciden'],
      plural_third_person_ellas_form: ['ellas','deciden']
    },    {
      verb_infinitive_form: 'trotar',
      singular_first_person_yo_form: ['yo','troto'],
      singular_second_person_tu_form: ['tú','trotas'],
      singular_third_person_el_form: ['el','trota'],
      singular_third_person_ella_form: ['ella','trota'],
      plural_first_person_nosotros_form: ['nosotros','trotamos'],
      plural_second_person_ustedes_form: ['ustedes','trotan'],
      plural_third_person_ellos_form: ['ellos','trotan'],
      plural_third_person_ellas_form: ['ellas','trotan']
    },    {
      verb_infinitive_form: 'perder',
      singular_first_person_yo_form: ['yo','pierdo'],
      singular_second_person_tu_form: ['tú','perdiste'],
      singular_third_person_el_form: ['el','perdió'],
      singular_third_person_ella_form: ['ella','perdió'],
      plural_first_person_nosotros_form: ['nosotros','perdimos'],
      plural_second_person_ustedes_form: ['ustedes','perdieron'],
      plural_third_person_ellos_form: ['ellos','perdieron'],
      plural_third_person_ellas_form: ['ellas','perdieron']
    },    {
      verb_infinitive_form: 'prohibir',
      singular_first_person_yo_form: ['yo','prohibo'],
      singular_second_person_tu_form: ['tú','prohibes'],
      singular_third_person_el_form: ['el','prohibe'],
      singular_third_person_ella_form: ['ella','prohibe'],
      plural_first_person_nosotros_form: ['nosotros','prohibimos'],
      plural_second_person_ustedes_form: ['ustedes','prohiben'],
      plural_third_person_ellos_form: ['ellos','prohiben'],
      plural_third_person_ellas_form: ['ellas','prohiben']
    }
  ]
}
