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
  randomNos: number[];
  quesIndex: number;
  isScenario: boolean;
  baseURL: string = 'http://localhost:3000';
  fin: boolean = false;
  totalLength: number = 5; //Change this value based on the number of entries in the DB

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<QuestionAnswer[]>(this.baseURL+'/dbquery').subscribe( res =>
      {
        this.quesAns = res;
      }
     );

    this.generateRandomSet();
    this.quesIndex = 0;
   }

  

  getNextQuestion(){
    return this.quesAns[this.quesIndex];
  }

  calculateNextQuestion(){
    this.quesIndex = this.quesIndex+1;
    if(this.quesIndex<this.totalLength){
      this.isScenario = (this.quesAns[this.quesIndex].Category === 'Scenario');
    }else{
      this.fin = true;
    }
  }

  isItAScenario(){
    return this.isScenario;
  }

  generateRandomSet(){
    let ransomnosSet = new Set<number>();
    while(ransomnosSet.size<this.totalLength){
      ransomnosSet.add(Math.floor(Math.random() * (this.totalLength - 0 + 1) + 0));
    }
    this.randomNos = Array.from(ransomnosSet);
  }

  isFinished(){
    return this.fin;
  }
}
