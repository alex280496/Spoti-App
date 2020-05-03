import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //para que ya no sea necesario importar el servicio en el app.module.ts
})
export class SpotifyService {

  constructor(
    private _http:HttpClient
  ) { }
  getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQD_TWaZDgY-SJ5_qBMfxIDA47luo8PRHRWCNKZfYo11pdeKaQ3g77UnC0siWrKunqaHXJaEWBOMvvCd1aw'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
  }
}
