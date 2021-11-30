import { Component, OnInit, Input } from "@angular/core";
import { TrackData } from "../../data/track-data";
import convertTime from "../../../utils/convertTime";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.css"],
})
export class TrackListComponent implements OnInit {
  @Input() gest:any;
  @Input() tracks: TrackData[];
  @Input() hideArtist: boolean = false;
  @Input() hideAlbum: boolean = false;
  time: string;
  convertFunction: Function = convertTime;
  selectedIndex: number = 1;

  constructor() {
    console.log("init")
  }

  ngOnInit() {
    console.log("changed")
  }
}
