import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  nuevasArtistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    this.spotify.getArtista(termino)
    .subscribe((data:any) =>{
      this.nuevasArtistas = data;
    });
  }

}
