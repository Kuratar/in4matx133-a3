import { Component, OnInit, OnChanges, Input, SimpleChanges } from "@angular/core";
import { TrackData } from "../../data/track-data";
import convertTime from "../../../utils/convertTime";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.css"],
})
export class TrackListComponent implements OnInit {
  @Input() gest: any;
  @Input() counter: number;
  @Input() tracks: TrackData[];
  @Input() hideArtist: boolean = false;
  @Input() hideAlbum: boolean = false;
  time: string;
  convertFunction: Function = convertTime;
  selectedIndex: number = 1;

  constructor() {
    console.log("init");
  }

  ngOnInit() {
    console.log("changed");
  }

  ngOnChanges() {
    console.log(this.gest);
    console.log(this.counter);
    if (this.gest === "Two Open Hands") {
      if (this.selectedIndex > 1) {
        this.selectedIndex -= 1;
      }
    } else if (this.gest === "Two Closed Hands") {
      if (this.selectedIndex < this.tracks.length) {
        this.selectedIndex += 1;
      }
    }
    else if (this.gest === "Open Hand") {
      console.log("here")
      const track:TrackData = this.tracks[this.selectedIndex-1];
      window.open(`http://localhost:4200/track/${track.id}`, "_blank")
      // window.location.href = `/track/${track.id}`;
    }
  }
}
