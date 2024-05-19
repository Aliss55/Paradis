import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { verb_conjugation_by_subject } from '../../Pages/utils/Verb_conjugation_by_subject';
import { NotificationService } from '../services/notification-service.service';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'shared-conjugation-cards',
  templateUrl: './conjugation-cards.component.html',
  styleUrl: './conjugation-cards.component.scss',
})
export class ConjugationCardsComponent implements OnChanges {
  @Input()
  public questions: verb_conjugation_by_subject[] = [];
  public visible: boolean = true;
  public answers!: string[][];
  public allCardAnswersAreCorrect: boolean[] = [];
  public cardResults: boolean[][] = [];

  constructor(private notificationService: NotificationService, private sanitizer: DomSanitizer) {}

  public showGrammarGuide() {
    this.visible = !this.visible;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions'] && changes['questions'].currentValue) {
      this.answers = this.questions.map((question) =>
        new Array(Object.keys(question).length - 1).fill(null),
      );
    }
  }

  public checkCardAnswers(index_card: number): void {
    let inputFieldValue = this.answers[index_card];
    let cardCorrectAnswers = this.questions[index_card] as any;
    let keys = Object.keys(cardCorrectAnswers);

    // Initialize the arrays at the index if they are not already initialized
    this.cardResults[index_card] = this.cardResults[index_card] || [];

    for (let i = 0; i < keys.length - 1; i++) {
      if (inputFieldValue[i] === cardCorrectAnswers[keys![i + 1]][1]) {
        this.cardResults[index_card][i] = true;
      } else {
        this.cardResults[index_card][i] = false;
      }
    }
  }

  public areAllUserAnswersCorrect(index_card: number): boolean {
    return this.cardResults[index_card].every(
      (result: boolean): boolean => result === true,
    );
  }

  public areAllPlaceholdersFilled(index_card: number): boolean {
    return this.answers[index_card].every(
      (answer: string): boolean => answer !== null,
    );
  }

  public notifyResultsToUser(index_card: number): void {
    this.checkCardAnswers(index_card);
    if (this.areAllUserAnswersCorrect(index_card)) {
      this.allCardAnswersAreCorrect[index_card] = true;
      this.notificationService.notifySucess('¡Respuesta correcta!');
    } else if (!this.areAllPlaceholdersFilled(index_card)) {
      this.notificationService.notifyError(
        'Por favor, llena todos los espacios',
      );
    } else {
      this.notificationService.notifyError('¡Inténtalo de nuevo!');
      this.resetIncorrectAnswers(index_card);
    }
  }

  public resetIncorrectAnswers(cardIndex: number): void {
    for (let i = 0; i < this.cardResults[cardIndex].length; i++) {
      if (this.cardResults[cardIndex][i] === false) {
        this.answers[cardIndex][i] = '';
      }
    }
  }

  public sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
