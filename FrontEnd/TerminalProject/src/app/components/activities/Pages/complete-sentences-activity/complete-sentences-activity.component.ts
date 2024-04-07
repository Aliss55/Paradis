import { Component, OnInit } from '@angular/core';
import { simple_present_conjugation } from '../../utils/activity_interfaces';
import { subjectsInSpanish } from '../../utils/subjects_in_spanish';

@Component({
  selector: 'app-complete-sentences-activity',
  templateUrl: './complete-sentences-activity.component.html',
  styleUrl: './complete-sentences-activity.component.scss',
})
export class CompleteSentencesActivityComponent implements OnInit {
  public play_conjugations_in_present_tense!: simple_present_conjugation[];
  public availableConjugations!: simple_present_conjugation[];
  public draggedConjugation: simple_present_conjugation | undefined | null;
  public draggedConjugationByRow: simple_present_conjugation[] = [];
  public selectedConjugations: simple_present_conjugation[] = [];

  ngOnInit() {
    this.play_conjugations_in_present_tense = [
      { subject: subjectsInSpanish.Yo, conjugated_verb: 'juego' },
      { subject: subjectsInSpanish.Tú, conjugated_verb: 'juegas' },
      { subject: subjectsInSpanish.Él, conjugated_verb: 'juega' },
      { subject: subjectsInSpanish.Nosotros, conjugated_verb: 'jugamos' },
      { subject: subjectsInSpanish.Ustedes, conjugated_verb: 'juegan' },
      { subject: subjectsInSpanish.Ellos, conjugated_verb: 'juegan' },
    ];
    this.availableConjugations = this.play_conjugations_in_present_tense;
  }

  dragStart(conjugation: simple_present_conjugation) {
    this.draggedConjugation = conjugation;
    this.printdata('dragstart');
  }

  drop(i: number) {
    console.log(this.draggedConjugationByRow[i]);
    if (
      this.draggedConjugation &&
      this.draggedConjugationByRow[i] == undefined
    ) {
      this.selectedConjugations.push(this.draggedConjugation);
      this.availableConjugations = this.availableConjugations.filter(
        (conjugation) => conjugation !== this.draggedConjugation,
      );
      this.draggedConjugationByRow[i] = this.draggedConjugation;
    }
    this.printdata('drop');
  }

  dragEnd() {
    // this.draggedConjugation = null;
    this.printdata('dragend');
  }

  public printdata(place?: string) {
    if (place) console.warn(place);
    console.table(this.draggedConjugationByRow);
    console.table(this.selectedConjugations);
  }
}
