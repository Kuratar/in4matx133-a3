import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { TrackFeature } from "../../data/track-feature";
import { SpotifyService } from "../../services/spotify.service";
import convertTime from "../../../utils/convertTime";

@Component({
  selector: "app-track-page",
  templateUrl: "./track-page.component.html",
  styleUrls: ["./track-page.component.css"],
})
export class TrackPageComponent implements OnInit {
  trackId: string;
  track: TrackData;
  audioFeatures: TrackFeature[];
  time: string;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    // http://localhost:4200/track/4eYaDRhiL5iesFp2EuoODr
    this.trackId = this.route.snapshot.paramMap.get("id");
    //TODO: Inject the spotifyService and use it to get the track data and it's audio features
    this.spotifyService.getTrack(this.trackId).then((trackData) => {
      this.track = trackData;
      this.time = convertTime(this.track.duration_ms);
    });
    this.spotifyService
      .getAudioFeaturesForTrack(this.trackId)
      .then((featuresData) => {
        this.audioFeatures = featuresData;
      });
  }

  // convertTime(ms: number) {
  //   const minutes = Math.floor(ms / 60000);
  //   const seconds = ((ms % 60000) / 1000).toFixed(0);
  //   return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
  // }
}
