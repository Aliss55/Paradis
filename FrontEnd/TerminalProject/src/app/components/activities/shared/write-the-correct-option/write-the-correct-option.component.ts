import {Component, Input} from '@angular/core';
import {orthography_options} from "../../Pages/utils/Orthography_options";
import {ShufflerService} from "../services/shuffler.service";
import {ThemeSwitcherService} from "../../../../services/theme-switcher.service";

@Component({
  selector: 'app-write-the-correct-option',
  templateUrl: './write-the-correct-option.component.html',
  styleUrl: './write-the-correct-option.component.scss'
})
export class WriteTheCorrectOptionComponent {
  @Input()
  // public questions: orthography_options[] = []
  public questions : orthography_options[] = [
    { correct_word: 'águila', incorrect_word1: 'aguila', incorrect_word2: 'agüila' },
    { correct_word: 'ambiguo', incorrect_word1: 'ambigüo', incorrect_word2: 'ambigo' },
    { correct_word: 'cigüeña', incorrect_word1: 'sigüeña', incorrect_word2: 'cigueña' },
    { correct_word: 'juguete', incorrect_word1: 'jüguete', incorrect_word2: 'jugüete' },
    { correct_word: 'averiguar', incorrect_word1: 'averigüar', incorrect_word2: 'averigar' },
    { correct_word: 'pingüino', incorrect_word1: 'pinguino', incorrect_word2: 'pingüiino' },
    { correct_word: 'ambigüedad', incorrect_word1: 'ambiguedad', incorrect_word2: 'ambigedad' },
    { correct_word: 'lengua', incorrect_word1: 'lenga', incorrect_word2: 'lengüa' },
    { correct_word: 'lengüeta', incorrect_word1: 'lengueta', incorrect_word2: 'lengeta' },
    { correct_word: 'desagüe', incorrect_word1: 'desagüe', incorrect_word2: 'desagüe' },
  ]

  public labels: string[][]=[];
  public shuffledQuestions: string[][] = []
  public answer: string = '';

  constructor( public shufflerService: ShufflerService, private themeService : ThemeSwitcherService) {
    // console.log(this.questions)
    this.labels = this.shufflerService.getShuffledPropertyLabels('', ['correct_word', 'incorrect_word1', 'incorrect_word2'], this.questions.length)
    // console.log(this.shufflerService.getShuffledPropertyLabels('questions', ['correct_word', 'incorrect_word1', 'incorrect_word2'], this.questions.length))
    this.shuffledQuestions = this.shufflerService.convertToArrayOfArrays(this.questions)
    console.log(this.shuffledQuestions)



  }

  public checkAnswer(): void {
  }


}
