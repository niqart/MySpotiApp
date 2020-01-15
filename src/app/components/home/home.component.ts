import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  loading: boolean;
  errorServ: boolean = false;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { 
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data:any) =>{
        this.nuevasCanciones = data;
        this.loading = false;
      }, (error:any) => {
          this.errorServ = true;
          this.loading = false;
          this.mensajeError = error.error.error.message;
      });
  }

}
