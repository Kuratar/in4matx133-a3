import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from "../../services/spotify.service";
import { PredictionEvent } from 'src/app/prediction-event';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];
  gesture: String = "";
  counter: number = 0;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    // https://open.spotify.com/album/7xgzD7onYd1Pms93ZOtxxX
  	this.albumId = this.route.snapshot.paramMap.get('id');
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    // this.spotifyService.getArtist('6sFIWsNpZYqfjUpaCgueju').then((artistData) => {
    //   console.log(artistData)
    // });
    this.spotifyService.getAlbum(this.albumId)
    .then((albumData) => {
      this.album = albumData;
    });

    this.spotifyService.getTracksForAlbum(this.albumId)
    .then((tracksData) => {
      this.tracks = tracksData;
    });
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log("album-page "+ this.gesture);
    this.counter += 1;
    if (this.counter > 100) this.counter = 0;
  }
}
