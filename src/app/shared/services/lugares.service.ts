import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

	lugares = [
    {
      "id" : 1,
      "nombre":"Gary",
      "show": true,
      "plan": 'pagado'
    },
    {
      "id" : 2,
      "nombre":"Mart",
      "show": false,
      "plan": 'gratis'
    },
    {
      "id" : 3,
      "nombre":"Trusta",
      "show": true,
      "plan": "pagado"
    },
    {
      "id" : 4,
      "nombre":"Alejo",
      "show": false,
      "plan": "En venta"
    }
  ];

  constructor( private db:AngularFirestore ) { }

  public getLugares( ){
  	return this.lugares;
  }

  public buscarId( idSearch ){
  	return this.lugares.find(({ id }) => id == idSearch || null );
  }

  public guardarLugar( lugar ){
    console.log( lugar );
    this.db.collection('working').add( lugar );
  }
}
