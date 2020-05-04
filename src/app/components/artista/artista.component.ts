import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent   {

  artista:any={};
  TopTracks:any[]=[];
  loading:boolean;
  constructor(
    private _route:ActivatedRoute,
    private spotify:SpotifyService
  ) { 
    this._route.params.subscribe(
      params=>{
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      }
    );
  }

  getArtista(id:string){
    this.loading=true;
    this.spotify.getArtista(id).subscribe(
      artista=>{
        console.log(artista);
        this.artista=artista;
        this.loading=false;
      }
    );
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(
      TopTracks=>{
        console.log(TopTracks);
        this.TopTracks=TopTracks;
      }
    );
  }

 
}
