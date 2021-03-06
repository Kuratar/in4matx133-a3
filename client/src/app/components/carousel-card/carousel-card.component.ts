import { Component, OnInit, Input } from "@angular/core";
import { ResourceData } from "../../data/resource-data";

@Component({
  selector: "app-carousel-card",
  templateUrl: "./carousel-card.component.html",
  styleUrls: ["./carousel-card.component.css"],
})
export class CarouselCardComponent implements OnInit {
  @Input() resource: ResourceData;
  @Input() info: string;
  @Input() songImageURL: string;
  @Input() url: string;
  @Input() category:string;

  constructor() {}

  ngOnInit() {
    this.info = this.resource.name;
    this.songImageURL = this.resource.imageURL;
    this.url = this.resource.url;
    console.log(this.resource);
  }
}
