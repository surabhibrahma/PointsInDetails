import { Component, OnInit } from '@angular/core';
import { MainQuestionAnswerService } from '../main-question-answer.service';
import { PlayerInfoScoreService } from '../player-info-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  highestScore: number = 0;
  showWinner: boolean = false;

  constructor(public playerinfoScoreService: PlayerInfoScoreService, public mainQuestionAnswerService: MainQuestionAnswerService) { }

  ngOnInit(): void {
  }

  addScore(i: number){
    this.playerinfoScoreService.playerDetails[i].score = this.playerinfoScoreService.playerDetails[i].score+1;
    if(this.highestScore < this.playerinfoScoreService.playerDetails[i].score){
      this.highestScore = this.playerinfoScoreService.playerDetails[i].score;
    }
  }

  getAllWinners(){
    console.log('Highest Score: '+this.highestScore);
    this.playerinfoScoreService.getWinnerDetails(this.highestScore);
    this.mainQuestionAnswerService.showWinner();
  }

}
