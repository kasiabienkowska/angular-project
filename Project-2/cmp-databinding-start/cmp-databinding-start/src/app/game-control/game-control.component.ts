import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  count: number = 0;
  interval: any;
  constructor() {}

  ngOnInit(): void {}

  gameCounter() {
    this.count++;
  }

  setGameInterval() {
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
