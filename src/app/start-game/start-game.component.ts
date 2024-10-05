import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MathchalangeComponent } from './common-components/mathchalange/mathchalange.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [MathchalangeComponent, CommonModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.css',
})
export class StartGameComponent {
  answer: string = '';

  resultIsCorrect: boolean = false;

  lifeCount: string = '♥♥♥';
  constructor(private router: Router) {
    this.answer = '';
  }

  home() {
    console.log('Start');
    this.router.navigate(['']);
  }

  onResultChanged(isCorrect: boolean): void {
    if (isCorrect) this.answer = this.answer + '⯌';
    else
      this.lifeCount = this.lifeCount.slice(0, 0) + this.lifeCount.slice(0 + 1);
    if (this.answer.length ==15) {
      this.router.navigate(['app-winner'],{ state: { win: true } });
    }
    if (this.lifeCount == '') this.router.navigate(['app-game-over']);
  }
}
