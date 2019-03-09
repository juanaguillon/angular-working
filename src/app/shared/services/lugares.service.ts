import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  lugares = null;

  constructor( private db:AngularFirestore ) { }

  public getLugares( ){
  	return this.db.collection("working").valueChanges();
  }

  public buscarId( idSearch ){
  	return this.lugares.find(({ id }) => id == idSearch || null );
  }

  public guardarLugar( lugar ){
    lugar.id = Date.now();
    this.db.collection('working').snapshotChanges()
  }

  public getLugar( id ){
    
    return this.db.collection("working").ref
  }

  

}
