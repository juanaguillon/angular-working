import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  lugares = null;
  API_ENDPOINT = 'https://angular-working-1549591892193.firebaseio.com';
  

  constructor( private db:AngularFirestore, private http:HttpClient ) { }

  public getLugares( ){
  	return this.db.collection("working").valueChanges();
  }

  public buscarId( idSearch ){
  	return this.lugares.find(({ id }) => id == idSearch || null );
  }

  public guardarLugar( lugar ){
    lugar.id = Date.now();
    // this.http.post( "http://localhost:8080/prueba-php/index1.php" , lugar, {
    //   "headers": { "Content-Type": "application/json" }
    // } ).subscribe( refs => console.log( refs ));

    this.db.collection('working').doc( lugar.id.toString() ).set(lugar)
  }

  public editarLugar( lugarId ){
    this.db.collection('working').doc(lugarId.id.toString()).update( lugarId );
  }

  public getLugar( id ){
    return this.db.doc('working/' + id).valueChanges();
  }

  

  

}
