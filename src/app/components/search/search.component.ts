import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  nuevasArtistas: any[] = [];
  loading: boolean;
  errorServ: boolean = false;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    this.loading = true;
    if (!termino) {
      this.loading = false;
    }
    
    this.spotify.getArtistas(termino)
    .subscribe((data:any) =>{
      this.nuevasArtistas = data;
      this.loading = false;
      this.errorServ = false;
    }, (error:any) => {
      this.errorServ = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
  });
  }

}
