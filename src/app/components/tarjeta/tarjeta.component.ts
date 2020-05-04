import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() items:any[]=[];
  constructor(
    private  _router:Router
  ) { }

  verArtista(item:any){
    

    let artistaId;
    if(item.type==="artist"){
      artistaId=item.id;
    }
    else{
      artistaId=item.artists[0].id;
    }
   this._router.navigate(['/artist',artistaId]);
  }

}
