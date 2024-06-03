import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Moderation} from "../interfaces/moderation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModerationService {

  private moderationServiceUrl = environment.moderationService;

  constructor(private http: HttpClient) { }

  checkModeration(text: string):Observable<Moderation> {
    const request = {
      'input' : text
    };
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${environment.OPENAI_API_KEY}`
    });
    return this.http.post<Moderation>(`${this.moderationServiceUrl}`,
      request,
    {headers: headers
    });
  }
}
