import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SpellChecker} from "../interfaces/spell-checker";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpellCheckerService {

  private spellCheckerServiceUrl = environment.spellCheckerService;
  constructor(private http: HttpClient) { }

  checkSpelling(text: string):Observable<SpellChecker[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post<SpellChecker[]>(`${this.spellCheckerServiceUrl}/spellchecker`, {
      text,
    }, {headers: headers}
    );
  }
}
