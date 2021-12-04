import { Component, OnInit } from '@angular/core';
import { PlayerInfoScoreService } from '../player-info-score.service';

@Component({
  selector: 'app-finished-winner',
  templateUrl: './finished-winner.component.html',
  styleUrls: ['./finished-winner.component.css']
})
export class FinishedWinnerComponent implements OnInit {

  constructor(public playerInfoScoreService: PlayerInfoScoreService) { }

  ngOnInit(): void {
  }

}
