import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "../../services/spotify.service";

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
}
