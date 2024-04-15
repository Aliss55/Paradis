import { Component, Input } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { professions_and_occupations } from '../../components/Activities/utils/professions_and_occupations_enum';
import { vocabulary_card_interface } from '../../components/Activities/utils/vocabulary_card_interface';

@Component({
  selector: 'shared-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrl: './cards-game.component.scss',
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
    const randomValues: string[] = shuffledValues.slice(0, 2);
    return randomValues;
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  updateCardData(selectedButtonIndex: number) {
    this.animationState = 'opacityZero';
    this.cardCounter++;
    if (this.cardCounter == this.questions_and_answers.length) {
      this.toggleShowFinalScore();
    }
    this.evaluateAnswer(selectedButtonIndex);
    console.warn(this.currentCardData.buttonValues);
    this.setCardData();
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
        ? this.correctAnswersCounter++
        : null;
    }
  }

  toggleShowFinalScore() {
    this.finalScoreDisplayed = !this.finalScoreDisplayed;
  }

  animationDone(event: AnimationEvent) {
    this.animationState = 'nonOpacity';
  }
}

//todo: fix evaluation of answers, the data is wrong
