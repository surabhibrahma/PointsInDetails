import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { ScoreComponent } from './score/score.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { FinishedWinnerComponent } from './finished-winner/finished-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersInfoComponent,
    ScoreComponent,
    MainScreenComponent,
    FinishedWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
