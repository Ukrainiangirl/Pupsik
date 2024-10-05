import { Routes } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameOverComponent } from './start-game/common-components/game-over/game-over.component';
import { WinnerComponent } from './start-game/common-components/winner/winner.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-start-game', component: StartGameComponent },
  { path: 'app-game-over', component: GameOverComponent },
  { path: 'app-winner', component: WinnerComponent },
];
