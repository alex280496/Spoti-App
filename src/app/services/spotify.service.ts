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
  getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQAtE9VAed_iG7X_0iJEknvO_J-zydl1WfHS2vEtAy9d6rFQxMEdzAD_66nJ9dsTgmKoPyDMAqwaBjxtCs4'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
      .pipe(map (data=>{
        return data['albums'].items;
      }));
  }
  getArtista(termino:string){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQAtE9VAed_iG7X_0iJEknvO_J-zydl1WfHS2vEtAy9d6rFQxMEdzAD_66nJ9dsTgmKoPyDMAqwaBjxtCs4'
    });
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
