import { Component } from '@angular/core';
import { PlayerInfoScoreService } from './player-info-score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'points-in-details-frontend';
  constructor(public playerInfoScoreService: PlayerInfoScoreService){
  }
}
