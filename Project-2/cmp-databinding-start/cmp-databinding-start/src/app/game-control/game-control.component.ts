import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  count: number = 0;
  interval: any;
  constructor() {}

  ngOnInit(): void {}

  gameCounter() {
    this.count++;
  }

  setGameInterval() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  stopGameInterval() {
    clearInterval(this.interval);
  }
}
