import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-engines',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent {
  engines;
  raceTime;
  quarterMileRace;
  constructor(appEngine: EngineService) {
    this.engines = appEngine.getParts();
    this.raceTime = appEngine.onRace();
    this.quarterMileRace = appEngine.ondrag();
  }
}
