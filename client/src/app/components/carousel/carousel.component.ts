import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { ResourceData } from "../../data/resource-data";
declare var $ : any;

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})

export class CarouselComponent implements OnInit {
  @Input() gest: any;
  @Input() counter: number;
  @Input() carouselId: string;
  @Input() resources: ResourceData[];
  @Input() category: string;
  @Input() video: any;
  selectedIndex: number = 1;
  

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function() {
      // $(`#${this.carouselId}`).carousel();
    })
  }

  ngOnChanges() {
    console.log(this.gest);
    console.log(this.counter);
    if (this.gest === "One Hand Open One Hand Closed") {
      if (this.selectedIndex > 1) {
        this.selectedIndex -= 1;
        (<any>$('.carousel') ).carousel("prev");
      }
    } else if (this.gest === "One Hand Open One Hand Pointing") {
      if (this.selectedIndex < this.resources.length) {
        this.selectedIndex += 1;
        (<any>$('.carousel') ).carousel("next");
      }
    } else if (this.gest === "Open Hand") {
      const resource: ResourceData = this.resources[this.selectedIndex - 1];
      window.open(
        `http://localhost:4200/${resource.category}/${resource.id}`,
        "_blank"
      );
      if (this.video) {
        this.video.stopDetection();
      }
    }
  }
}
