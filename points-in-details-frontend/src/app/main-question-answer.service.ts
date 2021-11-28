import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

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

  constructor(private httpClient: HttpClient) { }

  baseURL: string = 'http://localhost:3000';

  getByID(){
    console.log("Hits here!");
     return this.httpClient.get<QuestionAnswer[]>(this.baseURL+'/dbquery').subscribe( res =>
     {
       this.quesAns = res;
       console.log(res);
     }
    );
    console.log("After the call");
    console.log(this.quesAns);
  }
}
