import { Component, OnInit } from '@angular/core';
import { PlayerInfoScoreService } from '../player-info-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public playerinfoScoreService: PlayerInfoScoreService) { }

  ngOnInit(): void {
  }

  addScore(i: number){
    this.playerinfoScoreService.playerDetails[i].score = this.playerinfoScoreService.playerDetails[i].score+1;
  }

}
