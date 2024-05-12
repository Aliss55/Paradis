import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WordSuggester} from "../interfaces/word-suggester";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordSuggesterService {

  private wordSuggesterServiceUrl = environment.wordSuggesterService;
  constructor(private http: HttpClient) { }

  suggestWord(text: string): Observable<WordSuggester[]> {
    return this.http.post<WordSuggester[]>(`${this.wordSuggesterServiceUrl}/word_suggestion`, {
      text,
    });
  }
}
