import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { ResourceData } from "../../data/resource-data";

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

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.gest);
    console.log(this.counter);
    if (this.gest === "Two Open Hands") {
      if (this.selectedIndex > 1) {
        this.selectedIndex -= 1;
      }
    } else if (this.gest === "Closed Hand") {
      if (this.selectedIndex < this.resources.length) {
        this.selectedIndex += 1;
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
