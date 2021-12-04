import { Component, OnInit } from '@angular/core';
import { PlayerInfoScoreService } from '../player-info-score.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {

  noOfPlayers: number = 0;

  constructor(private playerInfoScoreService: PlayerInfoScoreService) { }

  ngOnInit(): void {
  }

  enterPlayerNames(playerNo: number){
    this.noOfPlayers = playerNo;
    this.playerInfoScoreService.createPlayers(playerNo);
  }

  initializePlayerDetails(){
    for(let i =0; i< this.noOfPlayers;i++){
       this.playerInfoScoreService.playerDetails[i].playerName = (<HTMLInputElement>document.getElementById(""+i)).value;
       this.playerInfoScoreService.playerDetails[i].score = 0;
    }
    this.playerInfoScoreService.displayTheMainScreen();
  }

}
