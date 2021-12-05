import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "../../services/spotify.service";
import { PredictionEvent } from "src/app/prediction-event";
import { HandtrackerComponent } from "src/app/handtracker/handtracker.component";

@Component({
  selector: "app-artist-page",
  templateUrl: "./artist-page.component.html",
  styleUrls: ["./artist-page.component.css"],
})
export class ArtistPageComponent implements OnInit {
  artistId: string;
  artist: ArtistData;
  relatedArtists: ArtistData[];
  topTracks: TrackData[];
  albums: AlbumData[];
  gesture: String = "";
  counter: number = 0;
  @ViewChild(HandtrackerComponent) video: any;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    // http://localhost:4200/artist/6sFIWsNpZYqfjUpaCgueju
    this.artistId = this.route.snapshot.paramMap.get("id");
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
    this.spotifyService.getArtist(this.artistId).then((artistData) => {
      this.artist = artistData;
    });

    this.spotifyService
      .getRelatedArtists(this.artistId)
      .then((relatedArtistsData) => {
        this.relatedArtists = relatedArtistsData;
      });

    this.spotifyService
    .getTopTracksForArtist(this.artistId)
    .then((topTracksData) => {
      this.topTracks = topTracksData;
    });

    this.spotifyService
    .getAlbumsForArtist(this.artistId)
    .then((albumsData) => {
      this.albums = albumsData;
    });
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log("artist-page "+ this.gesture);
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
