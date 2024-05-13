import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {GrammaticalAnalyzer} from "../interfaces/gammatical-analyzer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrammaticalAnalyzerService {

  private grammaticalAnalyzerServiceUrl = environment.grammaticalAnalyzerService;
  constructor(private http: HttpClient) { }

  analyzeGrammar(text: string):Observable<GrammaticalAnalyzer[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post<GrammaticalAnalyzer[]>(`${this.grammaticalAnalyzerServiceUrl}/grammatical_analysis`, {
      text,
    } , {headers: headers});
  }
}
