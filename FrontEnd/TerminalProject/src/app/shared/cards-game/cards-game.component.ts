import { Component, Input } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { professions_and_occupations } from '../utils/professions_and_occupations_enum';
import { vocabulary_card_interface } from '../utils/vocabulary_card_interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'shared-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrl: './cards-game.component.scss',
  providers: [MessageService],
  animations: [
    trigger('fadeInOut', [
      state(
        'opacityZero',
        style({
          opacity: 0,
        }),
      ),
      state(
        'nonOpacity',
        style({
          opacity: 1,
        }),
      ),
      transition('opacityZero => nonOpacity', [animate('1s')]),
    ]),
  ],
})
export class CardsGameComponent {
  @Input()
  public questions_and_answers!: vocabulary_card_interface[];
  public currentCardData: { buttonValues?: string[]; img_url?: string } = {};
  public areInstructionsBeingDisplayed: boolean = true;
  public animationState: string = 'opacityZero';
  public cardCounter: number = 0;
  public correctAnswersCounter: number = 0;
  public finalScoreDisplayed: boolean = false;

  constructor(public messageService: MessageService) {}

  public toggleShowInstructions() {
    this.areInstructionsBeingDisplayed = !this.areInstructionsBeingDisplayed;
  }

  ngOnInit() {
    this.setOptions();
    this.setCardData();
  }

  private setOptions() {
    this.questions_and_answers.forEach((question_and_answer) => {
      let randomValues = this.getRandomEnumValues();
      while (
        randomValues[0] === question_and_answer.answer ||
        randomValues[1] === question_and_answer.answer ||
        randomValues[0] === randomValues[1]
      ) {
        randomValues = this.getRandomEnumValues();
      }
      question_and_answer.option1 = randomValues[0];
      question_and_answer.option2 = randomValues[1];
    });
  }

  private getRandomEnumValues() {
    const enumValues: string[] = Object.values(professions_and_occupations);
    const shuffledValues: string[] = this.shuffleArray(enumValues);
    return shuffledValues.slice(0, 2);
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  updateCardData(selectedButtonIndex: number) {
    this.notifySucess('Answer Submitted');
    this.evaluateAnswer(selectedButtonIndex);
    this.animationState = 'opacityZero';
    this.cardCounter++;
    if (this.cardCounter == this.questions_and_answers.length) {
      this.toggleShowFinalScore();
    } else {
      this.setCardData();
    }
  }

  setCardData() {
    let buttonValues = [
      this.questions_and_answers[this.cardCounter].answer,
      this.questions_and_answers[this.cardCounter].option1,
      this.questions_and_answers[this.cardCounter].option2,
    ];
    this.currentCardData['buttonValues'] = this.shuffleArray(buttonValues);
    this.currentCardData.img_url =
      this.questions_and_answers[this.cardCounter].image_url;
  }

  private evaluateAnswer(selectedButtonIndex: number) {
    if (this.currentCardData?.buttonValues) {
      this.currentCardData.buttonValues[selectedButtonIndex] ===
      this.questions_and_answers[this.cardCounter].answer
        ? this.updateCorrectCountAndNotify('¡Respuesta correcta!')
        : this.notifyError('¡Inténtalo de nuevo!');
    }
  }

  private updateCorrectCountAndNotify(message: string) {
    this.correctAnswersCounter++;
    this.notifySucess(message);
  }

  private notifyError(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'error',
      severity: 'error',
      detail: message,
    });
  }

  private notifySucess(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'success',
      severity: 'success',
      detail: message,
    });
  }

  toggleShowFinalScore() {
    this.finalScoreDisplayed = !this.finalScoreDisplayed;
  }

  animationDone(event: AnimationEvent) {
    this.animationState = 'nonOpacity';
  }
}
