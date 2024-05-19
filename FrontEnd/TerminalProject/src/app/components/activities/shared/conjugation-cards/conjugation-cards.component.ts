import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {verb_conjugation_by_subject} from "../../Pages/utils/Verb_conjugation_by_subject";

@Component({
  selector: 'shared-conjugation-cards',
  templateUrl: './conjugation-cards.component.html',
  styleUrl: './conjugation-cards.component.scss'
})
export class ConjugationCardsComponent implements  OnChanges{

  @Input()
  public questions: verb_conjugation_by_subject[] = [];
  public visible: boolean = true;
  public answers!: string[][];
  public showCards = false

  public showGrammarGuide() {
    this.visible = !this.visible;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions'] && changes['questions'].currentValue) {
      this.answers = this.questions.map(question => new Array(Object.keys(question).length).fill(null));
    }
  }

  public checkAnswer(index_card: number, index_answer: number): void {
    console.warn('indexcard',this.questions[index_card])
    // this.answers[index_card][index_answer] = this.questions[index_card][Object.keys(this.questions[index_card])[index_answer]];
  }



}
