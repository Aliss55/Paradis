import { Component, OnInit } from '@angular/core';
import { simple_present_conjugation } from '../../utils/activity_interfaces';
import { subjectsInSpanish } from '../../utils/subjects_in_spanish';

@Component({
  selector: 'app-complete-sentences-activity',
  templateUrl: './drag-verbs.component.html',
  styleUrl: './drag-verbs.component.scss',
})
export class DragVerbs implements OnInit {
  public play_conjugations_in_present_tense!: simple_present_conjugation[];
  public availableConjugations!: simple_present_conjugation[];
  public draggedConjugation: simple_present_conjugation | undefined | null;
  public draggedConjugationByRow: simple_present_conjugation[] = [];
  private answersCounter: number = 0;

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
  }

  drop(rowIndex: number) {
    if (this.isTheRowEmpty(rowIndex)) {
      this.availableConjugations = this.removeElementFromArray(
        this.draggedConjugation!,
        this.availableConjugations,
      );
      this.draggedConjugationByRow[rowIndex] = this.draggedConjugation!;
      this.evaluateAnswer(rowIndex);
      this.countAnswers();
    } else {
      const previousAnswer = this.draggedConjugationByRow[rowIndex];
      this.draggedConjugationByRow[rowIndex] = this.draggedConjugation!;
      this.availableConjugations = this.removeElementFromArray(
        this.draggedConjugation!,
        this.availableConjugations,
      );
      this.availableConjugations.push(previousAnswer);
      // TODO: random options, something is not working
    }
  }

  dragEnd() {
    this.printdata('dragend');
  }

  public evaluateAnswer(rowIndex: number): void {
    this.draggedConjugationByRow[rowIndex].evaluation =
      this.draggedConjugationByRow[rowIndex].conjugated_verb ===
      this.play_conjugations_in_present_tense[rowIndex].conjugated_verb
        ? '¡Es correcto!'
        : 'Inténtalo de nuevo';
  }

  public countAnswers(): void {
    this.answersCounter++;
  }

  public resetActivity() {
    this.draggedConjugationByRow = [];
    this.availableConjugations = this.play_conjugations_in_present_tense;
  }

  public isTableFilled() {
    const numberOfQuestions = Object.keys(subjectsInSpanish).length;
    return this.answersCounter == numberOfQuestions ? true : false;
  }

  public printdata(place?: string) {
    if (place) console.warn(place);
    console.table(this.draggedConjugationByRow);
  }

  private isTheRowEmpty(rowIndex: number): boolean {
    return this.draggedConjugationByRow[rowIndex] == undefined ? true : false;
  }

  private removeElementFromArray(
    element: simple_present_conjugation,
    array: simple_present_conjugation[],
  ) {
    return array.filter((data: simple_present_conjugation) => data !== element);
  }
}
