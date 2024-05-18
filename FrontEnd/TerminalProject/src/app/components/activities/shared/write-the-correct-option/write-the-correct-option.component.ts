import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { orthography_options } from '../../Pages/utils/Orthography_options';
import { ShufflerService } from '../services/shuffler.service';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-write-the-correct-option',
  templateUrl: './write-the-correct-option.component.html',
  styleUrl: './write-the-correct-option.component.scss',
})
export class WriteTheCorrectOptionComponent implements OnChanges {
  @Input()
  public questions: orthography_options[] = [];
  public isCorrect: boolean[] = [];
  public labels: string[][] = [];
  public shuffledQuestions: string[][] = [];
  public answer: string[] = [];
  public visible: boolean = true;

  constructor(
    public shufflerService: ShufflerService,
    public notificationService: NotificationService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['questions'] && changes['questions'].currentValue) {
      this.labels = this.shufflerService.getShuffledPropertyLabels(
        '',
        ['correct_word', 'incorrect_word1', 'incorrect_word2'],
        this.questions.length,
      );
      this.shuffledQuestions = this.shufflerService.convertToArrayOfArrays(
        this.questions,
      );

      // Manually trigger change detection
      this.cdr.detectChanges();
    }
  }
  public checkAnswer(index_card: number): void {
    if (
      this.answer[index_card] === '' ||
      this.answer[index_card] === undefined
    ) {
      this.notificationService.notifyError(
        'Por favor introduce una respuesta válida',
      );
      return;
    }
    if (this.answer[index_card] === this.questions[index_card].correct_word) {
      this.isCorrect[index_card] = true;
      this.notificationService.notifySucess('¡Respuesta correcta!');
    } else {
      this.notificationService.notifyError('¡Inténtalo de nuevo!');
      this.answer[index_card] = '';
    }
  }

  public showOrthographicGuide(): void {
    this.visible = !this.visible;
  }
}
