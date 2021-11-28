import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class QuestionAnswer{
    ID: number;
    Statement: string;
    Category: string;
    Answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainQuestionAnswerService {

  quesAns: QuestionAnswer[];
  quesIndex: number = 0;
  isScenario: boolean;
  baseURL: string = 'http://localhost:3000';
  totalLength: number = 5; //Change this value based on the number of entries in the DB

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<QuestionAnswer[]>(this.baseURL+'/dbquery').subscribe( res =>
      {
        this.quesAns = res;
      }
     );

     
   }

  

  getNextQuestion(){
    this.totalLength = this.totalLength-1;
    return this.quesAns[this.quesIndex];
  }

  calculateNextQuestion(){
    this.quesIndex = Math.floor(Math.random() * (this.totalLength - 0 + 1) + 0);
    this.isScenario = (this.quesAns[this.quesIndex].Category === 'Scenario');
  }

  isItAScenario(){
    return this.isScenario;
  }
}
