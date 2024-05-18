import { Component } from '@angular/core';

@Component({
  selector: 'app-complete-sentences-to-be',
  templateUrl: './complete-sentences-to-be.component.html',
  styleUrl: './complete-sentences-to-be.component.scss'
})
export class CompleteSentencesToBeComponent {

  public value: string = "";

  public questions: Array<string> = [
    'Yo __ me llamo Alicia.',
    "Tú __ de México.",
    "Él __ de España.",
    "Ella __ de Colombia.",
    "Nosotros __ de Argentina.",
    "Ellos __ de Chile.",
    "Ellas __ de Perú.",
    "Ustedes __ de Venezuela.",

  ]

}
