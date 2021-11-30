import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log("home-page "+ this.gesture);
    this.counter += 1;
    if (this.counter > 100) this.counter = 0;
  }

}
