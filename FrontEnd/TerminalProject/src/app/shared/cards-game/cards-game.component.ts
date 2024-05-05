import {Component, Input} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger,} from '@angular/animations';
import {vocabulary_card_interface} from '../utils/vocabulary_card_interface';
import {MessageService} from 'primeng/api';

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
  @Input()
  public listOfIncorrectAnswers!: string[];
  public currentCardData: { buttonValues?: string[]; image?: HTMLImageElement | null } = {};
  public animationState: string = 'opacityZero';
  public cardCounter: number = 0;
  public correctAnswersCounter: number = 0;
  public finalScoreDisplayed: boolean = false;
  public nextImage: HTMLImageElement | null = null;
  public isWebPageLoading: boolean = true;

  constructor(public messageService: MessageService) {
  }


  ngOnInit() {
    this.isWebPageLoading = true;
    this.startLoadingImage(this.cardCounter);
    this.setLabelsForIncorrectAnswersForTheWholeQuiz();
    this.setAnswersAndImageToTheCurrentCard();
  }

  private startLoadingImage(indexImage: number) {
    this.nextImage = new Image();
    if (indexImage < this.questions_and_answers.length) {
      this.nextImage.src = this.questions_and_answers[indexImage].image_url;
      this.nextImage.onload = () => {
        this.isWebPageLoading = false;
      }
    }
  }

  private setLabelsForIncorrectAnswersForTheWholeQuiz() {
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

  setAnswersAndImageToTheCurrentCard() {
    let buttonValues = [
      this.questions_and_answers[this.cardCounter].answer,
      this.questions_and_answers[this.cardCounter].option1,
      this.questions_and_answers[this.cardCounter].option2,
    ];
    this.currentCardData['buttonValues'] = this.shuffleArray(buttonValues);
    this.currentCardData.image = this.nextImage;
    this.startLoadingImage(this.cardCounter + 1)
  }

  private getRandomEnumValues() {
    const enumValues: string[] = this.listOfIncorrectAnswers;
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
    this.evaluateAnswer(selectedButtonIndex);
    setTimeout(() => {
      this.animationState = 'opacityZero';
      this.cardCounter++;
      if (this.cardCounter == this.questions_and_answers.length) {
        this.toggleShowFinalScore();
      } else {
        this.isImageLoaded(this.nextImage!) ? this.isWebPageLoading = false : this.isWebPageLoading = true;
        this.setAnswersAndImageToTheCurrentCard();
      }

    }, 50)
  }

  toggleShowFinalScore() {
    this.finalScoreDisplayed = !this.finalScoreDisplayed;
  }

  isImageLoaded(image: HTMLImageElement) {
    return image.complete;
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
  private notifyError(message: string): void {
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

  resetGame() {
    this.cardCounter = 0;
    this.correctAnswersCounter = 0;
    this.finalScoreDisplayed = false;
    this.startLoadingImage(this.cardCounter);
    this.setLabelsForIncorrectAnswersForTheWholeQuiz();
    this.setAnswersAndImageToTheCurrentCard();
  }

  animationDone(event: AnimationEvent) {
    this.animationState = 'nonOpacity';
  }
}
