import { Component, OnInit } from '@angular/core';
import { MainQuestionAnswerService, QuestionAnswer } from '../main-question-answer.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  statscen: string;
  answer: string;
  category: string;
  revealAnswer: boolean = false;
  isScenario: boolean = false;
  isScenarioHeading: boolean = false;

  constructor(private mainQuestionAnswerService: MainQuestionAnswerService) { }

  ngOnInit(): void {
  }

  getAnswer(){
    this.mainQuestionAnswerService.calculateNextQuestion();
    this.revealAnswer = true;
    this.isScenario = this.mainQuestionAnswerService.isItAScenario();
  }

  onGetStatement(){
    this.revealAnswer = false;
    var retrievedStatement:QuestionAnswer = this.mainQuestionAnswerService.getNextQuestion();
    this.statscen = retrievedStatement.Statement;
    this.answer = retrievedStatement.Answer;
    this.category = retrievedStatement.Category;
    this.isScenarioHeading = (this.category === 'Scenario')
  }

}
