import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-mathchalange',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mathchalange.component.html',
  styleUrl: './mathchalange.component.css',
})
export class MathchalangeComponent {
  userInput: string = '';
  countdown: number = 10;
  interval: any;
  a!: number;
  b!: number;
  @Output() resultChanged = new EventEmitter<boolean>();

  constructor() {
    this.setupValues();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.interval);
        this.result();
      }
    }, 1000);
  }

  getUserInputValue(): number {
    // Пробуем преобразовать userInput в число, обрабатываем undefined и пустые значения
    const inputNumber = Number(this.userInput);
    return this.userInput === undefined || isNaN(inputNumber) ? 0 : inputNumber; // Если undefined или не число, возвращаем 0
  }

  generateRandomValue(): number {
    return Math.floor(Math.random() * (9 - 2 + 1)) + 2; // Генерация случайного числа от 2 до 9
  }

  result(): boolean {
    // Исправлено с bool на boolean
    const isValid = this.a * this.b === this.getUserInputValue(); // Сравниваем с пользовательским вводом
    this.resultChanged.emit(isValid);
    this.setupValues();
    return isValid;
  }

  setupValues() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.countdown = 10;
    this.startCountdown();
    this.a = this.generateRandomValue();
    this.b = this.generateRandomValue();
    this.userInput = '';
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.result();
    }
  }
}
