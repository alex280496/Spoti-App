import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root' //para que ya no sea necesario importar el servicio en el app.module.ts
})
export class SpotifyService {

  constructor(
    private _http:HttpClient
  ) { }
  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQB4420GJV9l_AHG9JGjPUfdGr_QhOrlhsQaBnVjxR6I5xOLrSr-bKIMVw7-uPleolIjJ2jcUagn42t2W3c'
    });
    return this._http.get(url,{headers});
  }
  getNewReleases(){
    //const headers=new HttpHeaders({
      //'Authorization':'Bearer BQDNiVmuX83J99xSUQuZ4bAyWjK3jGfWQFo731CYOXg8AF0f4tXF1q_z29mJIj44nROanze8wxCS0isOw7k'
    //});
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map (data=>{
      return data['albums'].items;
    }));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map (data=>{
      return data['artists'].items;
    }))
  }
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}`);
    
  }
}
