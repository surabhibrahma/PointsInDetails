import { Injectable } from '@angular/core';

export class Players {
  score: number;
  playerName: string;

};

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoScoreService {
  playerDetails: Players[];
  winnerName: string[];
  displayGameScreen: boolean = false;

  constructor() { }

  createPlayers(plNo: number){
    this.playerDetails = new Array(plNo);
   for(let i = 0; i<plNo;i++){
     this.playerDetails[i] = new Players();
   }
  }

  displayTheMainScreen(){
    this.displayGameScreen = true;
  }

  getWinnerDetails(highScore: number){
    this.winnerName = this.playerDetails.filter( p=> { return p.score === highScore}).map(p => { return p.playerName});
  }

  getAllWinners(){
    return this.winnerName;
  }
}
