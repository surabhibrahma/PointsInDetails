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
  showWin: boolean = false;
  totalLength: number = 4; //Change this value based on the number of entries in the DB - 1
  randomNosIter: number = 0;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<QuestionAnswer[]>(this.baseURL+'/dbquery').subscribe( res =>
      {
        this.quesAns = res;
      }
     );

    this.generateRandomSet();
    this.quesIndex = 0;
    console.log(this.randomNos);
   }

  

  getNextQuestion(){
    return this.quesAns[this.quesIndex];
  }

  calculateNextQuestion(){
    this.quesIndex = this.randomNos[this.randomNosIter];
    this.randomNosIter = this.randomNosIter+1;
    if(this.quesIndex<=this.totalLength){
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
      ransomnosSet.add(Math.floor(Math.random() * (this.totalLength - 1 + 1) + 1));
    }
    this.randomNos = Array.from(ransomnosSet);
  }

  isFinished(){
    return this.fin;
  }

  showWinner(){
    this.showWin = true;
  }
}
