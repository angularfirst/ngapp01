import { Injectable } from '@angular/core';

export class EngineService {
  getParts() {
    return ['v10', 'v11', 'v12'];
  }

  onRace() {
    let randomNum;
    randomNum = (Math.random() * (8.999 - 7.000) + 7.000).toFixed(3);
    return randomNum;
  }

  ondrag() {
    let dragTimesQuarter;
    dragTimesQuarter = (Math.random() * (6.999 - 5.000) + 5.000).toFixed(3);
    return dragTimesQuarter;
  }

}
