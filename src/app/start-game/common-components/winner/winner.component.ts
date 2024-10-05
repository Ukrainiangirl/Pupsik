import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css',
})
export class WinnerComponent implements OnInit {
  win?: boolean;
  winner = 'Pupsik';

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.hasOwnProperty('win')) {
      this.win = state.win;
    }
  }
}
