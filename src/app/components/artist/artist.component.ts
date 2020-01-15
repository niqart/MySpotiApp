import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent{

  artist:any = {};
  tracks:any[] = [];
  loadingArtist:boolean = true;

  constructor(private router:ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe(params =>{
      this.fetchArtist(params['id']);
      this.fetchTopTracks(params['id']);
    });
   }

   fetchArtist(id:string){
    this.loadingArtist = true;
    this.spotify.getArtist(id)
              .subscribe(artist =>{
                this.artist = artist;
                this.loadingArtist = false;
      });
    }
    fetchTopTracks(id:string){
      this.spotify.getTopTracks(id)
              .subscribe(tracks =>{
                this.tracks = tracks;
              });
    }
}
