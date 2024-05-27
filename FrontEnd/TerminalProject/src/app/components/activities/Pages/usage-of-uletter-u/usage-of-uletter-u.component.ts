import {Component, OnInit} from '@angular/core';
import {orthography_options} from "../utils/Orthography_options";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-usage-of-uletter-u',
  templateUrl: './usage-of-uletter-u.component.html',
  styleUrl: './usage-of-uletter-u.component.scss',
})
export class UsageOfULetterUComponent implements OnInit {

  constructor( private viewportScrollerService: ViewportScroller) {
  }
  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }

  public questions: orthography_options[] = [
    {
      correct_word: 'águila',
      incorrect_word1: 'aguila',
      incorrect_word2: 'agüila',
    },
    {
      correct_word: 'ambiguo',
      incorrect_word1: 'ambigüo',
      incorrect_word2: 'ambigo',
    },
    {
      correct_word: 'cigüeña',
      incorrect_word1: 'sigüeña',
      incorrect_word2: 'cigueña',
    },
    {
      correct_word: 'juguete',
      incorrect_word1: 'jüguete',
      incorrect_word2: 'jugüete',
    },
    {
      correct_word: 'averiguar',
      incorrect_word1: 'averigüar',
      incorrect_word2: 'averigar',
    },
    {
      correct_word: 'pingüino',
      incorrect_word1: 'pinguino',
      incorrect_word2: 'pingüiino',
    },
    {
      correct_word: 'ambigüedad',
      incorrect_word1: 'ambiguedad',
      incorrect_word2: 'ambigedad',
    },
    {
      correct_word: 'lengua',
      incorrect_word1: 'lenga',
      incorrect_word2: 'lengüa',
    },
    {
      correct_word: 'lengüeta',
      incorrect_word1: 'lengueta',
      incorrect_word2: 'lengeta',
    },
    {
      correct_word: 'desagüe',
      incorrect_word1: 'desagüe',
      incorrect_word2: 'desagüe',
    },
  ];
}
