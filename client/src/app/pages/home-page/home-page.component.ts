import { Component, OnInit, ViewChild } from '@angular/core';
import { PredictionEvent } from '../../prediction-event';
import { HandtrackerComponent } from 'src/app/handtracker/handtracker.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  counter: number = 0;
  @ViewChild(HandtrackerComponent) video: any;

  constructor() { }

  ngOnInit() {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log("home-page "+ this.gesture);
    this.counter += 1;
    if (this.counter > 100) this.counter = 0;
    if (this.gesture === "Two Hands Pinching" || this.gesture === "Two Hands Pointing") {
      this.video.stopDetection();
      if (this.gesture === "Two Hands Pointing") {
        window.close();
      }
    }
  }

}
