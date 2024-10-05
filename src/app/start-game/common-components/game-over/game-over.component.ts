import { Component } from '@angular/core';
import { StartGameComponent } from '../../start-game.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [StartGameComponent, RouterModule],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css',
})
export class GameOverComponent {
  title = 'Pupsik';
}
