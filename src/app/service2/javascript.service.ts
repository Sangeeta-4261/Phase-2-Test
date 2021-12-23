import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class javascriptService {

  constructor(private http: HttpClient) { }

  getQuestionjson(){
    return this.http.get<any>("assets/javascript.json");
  }
}
